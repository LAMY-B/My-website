function Welcome() {
  const currentUser = {
    name: "Ade",
    age: 16,
    hobby: "Gaming",
  };

  const name = currentUser.name;
  const age = currentUser.age;
  const hobby = currentUser.hobby;

  return (
    <>
      <h1 className="react">Welcome to React</h1>
      <p style={{ textAlign: "end", fontSize: 24, color: "blue" }}>
        This is my first UI component
      </p>
      <p>my name is {name}</p>
      <p>i am{age} years old</p>
      <p>i love {hobby}</p>
    </>
  );
}

export default Welcome;
