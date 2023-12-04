import { useEffect, useState } from "react"
import NavBar from "../../components/NavBar"
import axios from "axios"
import { useParams } from "react-router-dom"
export default function Notices() {

  const token = localStorage.getItem('auth_token')
  const { id } = useParams()
  const newId = id.split('-')
  const dataNormal = new Date()

  const [tagEducation, setTagEducation] = useState(false)
  const [tagScience, setTagScience] = useState(false)
  const [tagSport, setTagSport] = useState(false)
  const [tagSpending, setTagSpending] = useState(false)


  const [search, setSearch] = useState("")

  const [notices, setNotices] = useState([])
  const [date, setDate] = useState({
    selectMonth: null,
    selectDay: null,
    selectYear: null
  })
  console.log(newId)

  useEffect(() => {
    axios.post('http://localhost:3008/getnoticebyid', {
        token,
        id: newId
    }).then(response => {
        setNotices(response.data.notices)
    })
  }, [])
  console.log(date)
  return (
    <div>
        <NavBar/>
        <div className="flex flex-col items-center justify-center py-8">
            <h1>Pesquise pelo titúlo, ou palavra-chave</h1>
            <input type="text" className="border-2 w-96"
            value={search}
            onChange={e => setSearch(e.target.value)}
            />
        </div>
        <main className="flex justify-center px-4">
            <section className="flex justify-center h-[calc(100vh-64px)]">
                <div className="flex flex-col min-w-[900px] gap-4">
                    {notices.length > 0 && notices.filter((e) => e.title.toLowerCase().includes(search.toLowerCase()) || e.body.toLowerCase().includes(search.toLowerCase()) || e.lead.toLowerCase().includes(search.toLowerCase()) || e.dates.toLowerCase().includes(search.toLowerCase())).map((es)=>(
                        <div className="p-2 border-2 border-blue-500">
                            <div className="informations-basic pb-2 flex gap-12">
                                <div className="profile flex gap-2 items-center">
                                <img className="w-12 h-12 rounded-full border-2" src={''} alt="" />
                                    <div>
                                        <h1>Autor: {es.author}</h1>
                                        <p>{es.typeuser}</p>
                                    </div>
                                </div>
                            <p className="text-[12px]">{es.dates.split('T03:00:00.000Z')}</p>
                            </div>
                            <hr/>
                            <div className="main-content">
                                    <h1>{es.title}</h1>
                                    <img src={es.image} className="w-full object-cover h-96" alt="" />
                                    <p className="opacity-60 text-xl">{es.lead}</p>
                                    <p>{es.body}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    </div>
  )
}
