// import * as aboutStyles from '../../styles/about.modules.scss'

export default function About() {
  const handleSubmit = (e: any) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const username = formData.get('username');
    const password = formData.get('password');

    fetch('http://localhost:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log('data -> ', data);
      })
      .catch((err) => {
        console.log('Error -> ', err);
      });
  };

  return (
    <>
      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login Form</h2>
      <form onSubmit={handleSubmit} style={{ textAlign: 'center' }}>
        {/* <form onSubmit={handleSubmit} style={{ aboutStyles }}> */}

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '15px',
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', width: '250px' }}
          >
            <label style={{ textAlign: 'right', width: '70px' }}>用户名</label>
            <label>: </label>
            <input name="username" style={{ flex: '1' }} />
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            marginBottom: '15px',
          }}
        >
          <div
            style={{ display: 'flex', alignItems: 'center', width: '250px' }}
          >
            <label style={{ textAlign: 'right', width: '70px' }}>
              密&nbsp;&nbsp;&nbsp;&nbsp;码
            </label>
            <label>: </label>
            <input name="password" type="password" style={{ flex: '1' }} />
          </div>
        </div>

        <button
          type="submit"
          style={{ marginTop: '10px', padding: '5px 10px' }}
        >
          Submit
        </button>
      </form>
    </>
  );
}
