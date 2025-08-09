import { useState } from 'react';

function Lista() {
    const [items, setItems] = useState([
        {
            imageUrl: 'https://picsum.photos/300/200',
            title: 'Item 1',
            subtitle: 'Description for item 1'
        },
        {
            imageUrl: 'https://picsum.photos/300/200',
            title: 'Item 2',
            subtitle: 'Description for item 2'
        },
        {
            imageUrl: 'https://picsum.photos/300/200',
            title: 'Item 3',
            subtitle: 'Description for item 3'
        },
        {
            imageUrl: 'https://picsum.photos/300/200',
            title: 'Item 4',
            subtitle: 'Description for item 4'
        },
        {
            imageUrl: 'https://picsum.photos/300/200',
            title: 'Item 5',
            subtitle: 'Description for item 5'
        },
        {
            imageUrl: 'https://picsum.photos/300/200',
            title: 'Item 6',
            subtitle: 'Description for item 6'
        }
    ]);

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <header className="mb-12 text-center">
                <h1 className="text-4xl font-bold text-gray-800">My Item List</h1>
            </header>

            <main className="container mx-auto">
                <div className="flex flex-col space-y-6 p-4">
                    {items.map((item, index) => (
                        <div key={index} className="w-full max-w-md mx-auto bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
                            <img
                                src={item.imageUrl}
                                alt={item.title}
                                className="w-full h-48 object-cover"
                                // Adding error handling for images
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/300x200?text=Image+Not+Found';
                                }}
                            />
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h2>
                                <p className="text-gray-600">{item.subtitle}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
};

export default Lista;
