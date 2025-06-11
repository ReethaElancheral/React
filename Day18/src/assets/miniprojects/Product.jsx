import  { useState, useEffect } from 'react';
import API from '../../api/api';

function ProductCRUD() {
  const [products, setProducts] = useState([]);
  const [form, setForm] = useState({ id: null, title: '', price: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');


  const fetchProducts = async () => {
    setLoading(true);
    try {
      const res = await API.get('/?limit=9');
      setProducts(res.data.products); 
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (form.id === null) {
        const res = await API.post('/add', {
          title: form.title,
          price: Number(form.price),
        });
        setProducts([res.data, ...products]);
      } else {
        const res = await API.put(`/${form.id}`, {
          title: form.title,
          price: Number(form.price),
        });
        setProducts(products.map(p => (p.id === form.id ? res.data : p)));
      }
      setForm({ id: null, title: '', price: '' });
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

 
  const handleEdit = (prod) => {
    setForm({ id: prod.id, title: prod.title, price: prod.price });
  };

  
  const handleDelete = async (id) => {
    setLoading(true);
    try {
      await API.delete(`/${id}`);
      setProducts(products.filter(p => p.id !== id));
      setError('');
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="loading">Loading…</div>;
  if (error) return <div className="error">Error: …</div>;

  return (
    <div className='producthead'>
      <h2>2.Product Management CRUD</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Title"
          value={form.title}
          onChange={(e) => setForm({ ...form, title: e.target.value })}
          required
        />
        <input
          placeholder="Price"
          type="number"
          step="0.01"
          value={form.price}
          onChange={(e) => setForm({ ...form, price: e.target.value })}
          required
        />
        <button type="submit">{form.id === null ? 'Add Product' : 'Update Product'}</button>
        {form.id !== null && (
          <button type="button" onClick={() => setForm({ id: null, title: '', price: '' })}>
            Cancel
          </button>
        )}
      </form>

      <ul>
        <div className="product-container">
  {products.map(p => (
    <div className="product-card" key={p.id}>
      <h3>{p.title}</h3>
      <p>INR{p.price}</p>
      <div className="product-actions">
        <button className="edit-btn" onClick={() => handleEdit(p)}>Edit</button>
        <button className="delete-btn" onClick={() => handleDelete(p.id)}>Delete</button>
      </div>
    </div>
  ))}
</div>
      </ul>
    </div>
  );
}

export default ProductCRUD;
