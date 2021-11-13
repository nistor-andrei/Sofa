import { useState } from 'react';
import { useAuth } from '../Auth/AuthContext.context';
import { Nav } from '../Nav/Nav';
import styles from './profile.module.scss';
import cloud from '../../assets/icons/cloud-upload-alt-solid.svg';

export function Profile() {
  const { auth, logout } = useAuth();
  const [profile, setProfile] = useState({
    firstname: auth.user.firstname,
    email: auth.user.email,
  });
  const [imageSelected, setImageSelected] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [avatar, setAvatar] = useState(null);

  async function handleSubmit() {
    const updated = { firstname: profile.firstname, email: profile.email };
    await fetch(`http://localhost:3001/users/${auth.user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${auth.accessToken}`,
      },
      body: JSON.stringify(updated),
    }).then((res) => res.json());
  }

  function handleChange(e) {
    const newValue = { ...profile };
    newValue[e.target.name] = e.target.value;
    setProfile(newValue);
  }

  function handleModal(e) {
    e.preventDefault();
    setIsOpen(true);
  }
  async function handleDelete() {
    await fetch(`http://localhost:3001/users/${auth.user.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${auth.accessToken}`,
      },
    });
    logout();
  }

  async function uploadImage() {
    const formData = new FormData();
    formData.append('file', imageSelected);
    formData.append('upload_preset', 'ha4mspba');

    const image = await fetch('https://api.cloudinary.com/v1_1/andreimn/image/upload', {
      method: 'POST',
      body: formData,
    }).then((res) => res.json());

    setAvatar(image.url);
  }

  async function handleUpload() {
    const data = await fetch(`http://localhost:3001/users/${auth.user.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${auth.accessToken}`,
      },
      body: JSON.stringify({
        url: avatar,
      }),
    }).then((res) => res.json());

    console.log(data);
  }
  if (avatar) {
    handleUpload();
  }

  return (
    <>
      <Nav />
      {isOpen && (
        <section className={styles.modalDelete}>
          <div className={styles.modalBody}>
            <p>Are you sure ?</p>
            <div className={styles.modalFooter}>
              <button className={styles.yes} onClick={handleDelete}>
                Yes
              </button>
              <button className={styles.no} onClick={() => setIsOpen(false)}>
                No
              </button>
            </div>
          </div>
        </section>
      )}
      <main>
        <section className={styles.profile}>
          <h2>Edit Profile</h2>
          <p>Change your avatar</p>

          <div className={styles.uploadFiles}>
            <label htmlFor="upload" className={styles.uploadButton}>
              <img src={cloud} alt="upload" />
              Choose File
            </label>
            <input
              type="file"
              id="upload"
              hidden
              onChange={(e) => {
                setImageSelected(e.target.files[0]);
              }}
            />
            <button onClick={uploadImage}>Upload</button>
          </div>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" value={profile.firstname} name="firstname" onChange={handleChange} />
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={profile.email} name="email" onChange={handleChange} />
            <div className={styles.actionButton}>
              <button className={styles.sendButton}>Edit</button>
              <button className={styles.deleteButton} onClick={handleModal}>
                Delete
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}
