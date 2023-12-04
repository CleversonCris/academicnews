import React, { useState } from 'react'
import NavBar from '../../components/NavBar'
import { MdOpacity } from 'react-icons/md'
import Options from './Options'
import axios from 'axios'
export default function CreateNotice() {

  const [error, setError] = useState(null)
  const [message, setMessage] = useState("")
  

  const [title, setTitle] = useState("")
  const [lead, setLead] = useState("")
  const [body, setBody] = useState("")
  const [category, setCategory] = useState("")
  const [image, setImage] = useState(null)
  console.log(image)
  const instance = axios.create({
    maxContentLength: 2000000, // Adjust the value based on your needs
  });

  async function EnviarNoticia(e) {
    e.preventDefault()
    const newImage = new FormData()
    newImage.append('image', image)
    let document = "";
    let reader = new FileReader();
    reader.readAsDataURL(image);
    const data = {
        title,
        lead,
        body,
        document,
        token: localStorage.getItem('auth_token')
    }
    console.log(title)
    reader.onload = function () {
      document = reader.result;
      data.document = document
      instance.post('http://localhost:3008/createnotice', data)
      .then(response => {
        // Handle success
        if(response.data.msg){
            setMessage(response.data.msg)
            if(response.data.error === true){
                setError(true)
            } else {
                setError(false)
            }
        }
      })
      .catch(error => {
        // Handle error
        console.error(error);
      });
    };
    reader.onerror = function (error) {
      console.log('Error: ', error);
    };

    console.log(data)
    
  }



  return (
        <div className='flex'>
            <Options/>
            <section className='main flex w-full justify-center items-center'>
                <form onSubmit={EnviarNoticia} action="" className='flex flex-col gap-2 flex-wrap'>
                    <label className='flex flex-col'>
                      <span>Título:</span>
                      <textarea className='border-purple-500 border-2' name="" id="" cols="60" rows="2"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                      ></textarea>
                    </label>
                    <label htmlFor="" className='flex flex-col gap-2'>
                        <span>Lead:</span>
                        <textarea className='border-2 border-purple-500' name="" id="" cols="60" rows="3"
                          value={lead}
                          onChange={e => setLead(e.target.value)}
                        ></textarea>
                    </label>
                    <label htmlFor="" className='flex flex-col gap-2'>
                      <span>Corpo:</span>
                      <textarea className='border-2 border-purple-500' name="" id="" cols="60" rows="20"
                          value={body}
                          onChange={e => setBody(e.target.value)}
                        ></textarea>
                    </label>
                    <label htmlFor="" className='mt-2 flex flex-col'>
                        <span>Imagem:</span>
                        <input type="file" onChange={e => setImage(e.target.files[0])}/>
                    </label>
                    <button type='submit'>Enviar</button>
                    {error !== null && error === true && <button className='bg-red-500 h-10 px-4 text-white font-bold'>{message}</button>}
                    {error !== null && error === false && <button className='bg-green-500 h-10 px-4 text-white font-bold'>{message}</button>}
                </form>
            </section>
        </div>
  )
}
