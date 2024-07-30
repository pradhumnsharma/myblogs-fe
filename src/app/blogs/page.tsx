import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
async function getData() {
    const cookiesData = cookies();
    const token = cookiesData.get('token');

    if (!token) {
        return {
            status: 401,
            success: false,
        };
    }

    const response = await fetch('http://localhost:8001/api/blogs', {
        headers: { Authorization: `Bearer ${token.value}` },
    });

    return response.json();
}

const Blogs = async () => {
    const data = await getData();

    if (!data.success && data.status === 401) {
        redirect('/login');
    }

    return <div>Welcome to blogs list</div>;
};

export default Blogs;
