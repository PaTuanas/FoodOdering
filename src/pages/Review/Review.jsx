import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';

export default function ReviewForm() {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const navigate = useNavigate();

    const handleImageChange = (event) => {
        if (event.target.files && event.target.files[0]) {
            setImage(URL.createObjectURL(event.target.files[0]));
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Mô phỏng việc gửi dữ liệu form
        console.log('Submitting', { title, content, image });

        // Giả định rằng việc "gửi" dữ liệu thành công
        // Thực hiện chuyển hướng
        navigate('/post', { state: { title, content, image } });
        
        // Reset state của form
        setTitle('');
        setContent('');
        setImage(null);
    };

    // Style cho form, bạn có thể điều chỉnh theo ý muốn
    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        margin: 'auto',
        maxWidth: '800px',
        padding: '20px',
        boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
    };

    const inputStyle = {
        margin: '10px 0',
        padding: '10px',
        borderRadius: '4px',
        border: '1px solid #ddd',
    };

    const buttonStyle = {
        margin: '20px 0',
        padding: '10px 20px',
        borderRadius: '4px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: 'white',
        cursor: 'pointer',
    };

    return (
        <div>
            <Navbar />
            <h1 className='title'>Post review</h1>
            <form onSubmit={handleSubmit} style={formStyle}>
                <input
                    type="text"
                    placeholder="Nhập tiêu đề, ví dụ: 'Món ăn ở đây thật tuyệt!'"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    style={inputStyle}
                />
                <textarea
                    placeholder="Nhập nội dung bình luận"
                    value={content}
                    onChange={(e) => setContent(e.target.value)}
                    required
                    style={{ ...inputStyle, height: '100px' }}
                />
                <input
                    type="file"
                    onChange={handleImageChange}
                    style={inputStyle}
                />
                {image && <img src={image} alt="Preview" style={{ maxWidth: '100%', marginTop: '10px' }} />}
                <button type="submit" style={buttonStyle}>
                    Hoàn tất
                </button>
            </form>
        </div>
    );
}
