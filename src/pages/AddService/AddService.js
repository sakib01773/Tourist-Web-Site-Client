
import useTitle from '../../hook/useTitle';

const AddService = () => {
    useTitle("Addservice")

    // const addservice = useLoaderData()
    const handleService = event => {
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const img = form.img.value;
        const description = form.description.value;
        const price = form.price.value

        const service = {
            service_id: 8,
            title,
            img,
            price,
            description

        }

        fetch('http://localhost:5000/service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    alert('Your service post successfully!')
                    form.reset();
                }

            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <div className='container mx-auto w-96 shadow-2xl p-5 my-10 border rounded-lg' >
                <h1 className='text-5xl text-orange-600 text-center my-16 font-extrabold'>Add Service</h1>

                <form onSubmit={handleService}>
                    <input name="title" type="text" placeholder="service name" className="input input-bordered w-full my-5" required />
                    <input name="price" type="text" placeholder="price" className="input input-bordered w-full my-5" />
                    <input name="img" type="text" placeholder="Photo URL" className="input input-bordered w-full my-5" required />


                    <textarea name="description" className="textarea textarea-bordered w-full" placeholder="service description"></textarea>

                    <div className='flex justify-center'><button className="btn btn-accent flex justify-center my-5">Submit</button></div>



                </form>
            </div>


        </div>
    );
};

export default AddService;