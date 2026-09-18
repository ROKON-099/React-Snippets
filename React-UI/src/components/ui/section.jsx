

const products = [
  { id: 1, name: "Wireless Headphone", price: 2500, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 2, name: "Smart Watch", price: 3500, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { id: 3, name: "Gaming Mouse", price: 1200, image: "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500" },
  { id: 1, name: "Wireless Headphone", price: 2500, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500" },
  { id: 2, name: "Smart Watch", price: 3500, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500" },
  { id: 4, name: "Keyboard", price: 4500, image: "https://images.unsplash.com/photo-1589578228447-e1a4e481c6c8?w=500" },
]

function Section () {
    return (

        <div className="max-w-7xl mx-auto px-4 py-8">

            <h1 className="text-2xl font-bold m-4 text-blue-600 text-center">
                Our Products
            </h1>

            <div className= "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {products.map((items)=>(
                    <div key={items.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                        <img src={items.image} alt={items.name}  className="w-full  rounded-lg object-cover h-32"/>
                        <h3 className="text-lg font-semibold m-1 text-center"> {items.name}</h3>
                        <p className="text-gray-800 text-right">{items.price}</p>
                        </div>


                ))}
            </div>
            
        </div>





    )
    
}
export default Section 