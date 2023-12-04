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
        <main className="flex px-4">
            <div>
            </div>
            <div className="actions w-96">
                <nav>
                    <div className="flex flex-col gap-2">
                        <h1 className="text-xl">Filtros</h1>
                        <div className="flex flex-col">
                            <label htmlFor="" className="flex flex-col">
                                <span>Selecione o Mês da notícia:</span>
                                <select name="" className="h-8 w-40" id="" onChange={(e) => setDate({
                                    selectDay: date.selectDay,
                                    selectMonth: e.target.value,
                                    selectYear: date.selectYear
                                })}>
                                    <option  selected>Mês</option>
                                    <option value="1">Janeiro</option>
                                    <option value="2">Fevereiro</option>
                                    <option value="3">Março</option>
                                    <option value="4">Abril</option>
                                    <option value="5">Maio</option>
                                    <option value="6">Junho</option>
                                    <option value="7">Julho</option>
                                    <option value="8">Agosto</option>
                                    <option value="9">Setembro</option>
                                    <option value="10">Outubro</option>
                                    <option value="11">Novembro</option>
                                    <option value="12">Dezembro</option>
                                </select>
                            </label>
                            <label htmlFor="" className="flex flex-col">
                                <span>Selecione o Dia da notícia:</span>
                                <select name="" className="h-8 w-40" id="" onChange={(e) => setDate({
                                    selectDay: e.target.value,
                                    selectMonth: date.selectMonth,
                                    selectYear: date.selectYear
                                })}>
                                    <option selected>Dia</option>
                                    <option value="1">01</option>
                                    <option value="2">02</option>
                                    <option value="3">03</option>
                                    <option value="4">04</option>
                                    <option value="5">05</option>
                                    <option value="6">06</option>
                                    <option value="7">07</option>
                                    <option value="8">08</option>
                                    <option value="9">09</option>
                                    <option value="10">10</option>
                                    <option value="11">11</option>
                                    <option value="12">12</option>
                                    <option value="13">13</option>
                                    <option value="14">14</option>
                                    <option value="15">15</option>
                                    <option value="16">16</option>
                                    <option value="17">17</option>
                                    <option value="18">18</option>
                                    <option value="19">19</option>
                                    <option value="20">20</option>
                                    <option value="21">21</option>
                                    <option value="22">22</option>
                                    <option value="23">23</option>
                                    <option value="24">24</option>
                                    <option value="25">25</option>
                                    <option value="26">26</option>
                                    <option value="27">27</option>
                                    <option value="28">28</option>
                                    <option value="29">29</option>
                                    {date.selectMonth !== 2 && <option value="30">30</option>}
                                    {date.selectMonth !== 2 && <option value="31">31</option>}
                                </select>
                            </label>
                            <label htmlFor="" className="flex flex-col">
                                <span>Selecione o Ano da notícia:</span>
                                <select name="" className="h-8 w-40" id="" onChange={(e) => setDate({
                                    selectDay: date.selectDay,
                                    selectMonth: date.selectMonth,
                                    selectYear: e.target.value
                                })}>
                                    <option selected>Ano</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                    <option value="2021">2021</option>
                                    <option value="2022">2023</option>
                                    <option value="2023">2024</option>
                                    <option value="2024">2025</option>
                                </select>
                            </label>
                        </div>
                        <h1>Categorias:</h1>
                        <label htmlFor="education" className="flex gap-2">
                            <input type="radio" id="education"/>
                            <span>Educação</span>
                        </label>
                        <label htmlFor="" className="flex gap-2">
                            <input type="radio" />
                            <span>Esporte</span>
                        </label>
                        <label htmlFor="" className="flex gap-2">
                            <input type="radio" />
                            <span>Educação</span>
                        </label>
                    </div>
                </nav>
            </div>
            <section className="flex justify-center h-[calc(100vh-64px)]">
                <div className="flex flex-col min-w-[900px] gap-4">
                    {notices.length > 0 && notices.filter((e) => e.title.toLowerCase().includes(search.toLowerCase()) || e.body.toLowerCase().includes(search.toLowerCase()) || e.lead.toLowerCase().includes(search.toLowerCase())).map((es)=>(
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
