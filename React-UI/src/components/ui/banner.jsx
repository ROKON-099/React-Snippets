
function Banner() {
  const users = [
    {
      id: 1,
      name: "Rahim",
      age: 22,
      city: "Dhaka"
    },
    {
      id: 2,
      name: "Karim",
      age: 24,
      city: "Rajshahi"
    },
    {
      id: 3,
      name: "Hasan",
      age: 21,
      city: "Chittagong"
    }
  ];

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-6">
        User Profiles
      </h1>

      <div className="grid grid-cols-3 gap-5">

        {users.map(({ id, name, age, city }) => (

          <div
            key={id}
            className="border rounded-lg p-5 shadow"
          >

            <h2 className="text-xl font-bold">
              {name}
            </h2>

            <p>Age: {age}</p>

            <p>City: {city}</p>

          </div>

        ))}

      </div>

    </div>
  );
}

export default Banner;

