'use client';

import { deepCopy } from '@/utils/commonHelper';
import React, { useState } from 'react';
import './AddNewBlog.scss';

const AddNewBlog: React.FC = () => {
    const [formData, setFormData] = useState({
        title: '',
        summary: '',
        description: '',
        category: '',
        tags: [],
    });

    const handleInputChange = (event: any) => {
        const currentFormData = deepCopy(formData);
        currentFormData[event.target.name] = event.target.value;
        setFormData(currentFormData);
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit} className="add-blog-form">
            <label>
                Title:
                <input
                    type="text"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="form-input"
                    name={'title'}
                />
            </label>
            <br />
            <label>
                Summary:
                <input
                    type="text"
                    value={formData.summary}
                    onChange={handleInputChange}
                    className="form-input"
                    name={'summary'}
                />
            </label>
            <label>
                Description:
                <textarea
                    value={formData.description}
                    onChange={handleInputChange}
                    className="form-textarea"
                    name={'description'}
                />
            </label>
            <br />
            <label>
                Category:
                <select
                    value={formData.category}
                    onChange={handleInputChange}
                    className="form-select"
                    name={'category'}
                >
                    <option value="">Select Category</option>
                    <option value="technology">Technology</option>
                    <option value="lifestyle">Lifestyle</option>
                    <option value="travel">Travel</option>
                </select>
            </label>
            <br />
            <label>
                Tags:
                <input
                    type="text"
                    value={formData.tags.join(', ')}
                    onChange={handleInputChange}
                    className="form-input"
                    name="tags"
                />
            </label>
            <br />
            <button type="submit" className="form-button">
                Add Blog Post
            </button>
        </form>
    );
};

export default AddNewBlog;
