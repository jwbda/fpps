// import * as aboutStyles from '../../styles/about.module.scss'
// import aboutScss from '../../styles/about.module.scss'
import aboutStyles from './about.module.scss';

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
      {/* flex */}
      {/* <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login Form</h2>
      <form onSubmit={handleSubmit} className={aboutStyles.formContainer}>
        <div className={aboutStyles.username}>
          <label>用户名:&nbsp;</label>
          <input name="username" />
        </div>

        <div className={aboutStyles.password}>
          <label>密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;</label>
          <input name="password" type="password" />
        </div>

        <div className={aboutStyles.submit}>
          <div>
            <label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
            <button type="submit">Submit</button>
          </div>
        </div>
      </form> */}

      <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Login Form</h2>
      <form onSubmit={handleSubmit} >
        <div className={aboutStyles.formContainer}>
          <label className={aboutStyles.usernameLabel}>用户名:&nbsp;</label>
          <input name="username" className={aboutStyles.usernameInput} />

          <label className={aboutStyles.passwordLabel}>密&nbsp;&nbsp;&nbsp;&nbsp;码:&nbsp;</label>
          <input name="password" type="password" className={aboutStyles.passwordInput} />

          <label className={aboutStyles.submitLabel}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
          <button type="submit" className={aboutStyles.submitButton}>Submit</button>

        </div>
      </form >
    </>
  );
}
