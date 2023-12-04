import React from 'react'
import NavBar from '../../components/NavBar'
import Video from './Video'
import Footer from '../../components/Footer'
export default function About() {
  return (
    <>
        <NavBar/> 
        <section className='flex justify-center py-20'>
            <div className='flex flex-col items-center gap-24 max-w-4xl justify-center'>
                <div>
                    <h1 className='text-center text-2xl  font-bold text-purple-500'>O que é a Academic News?</h1>
                    <p className='opacity-70'>O objetivo do portal de notícias Academic News é a integração de escolas públicas por meio de noticias. Informando os alunos, professores e agentes sobre o que acontece na escola em que estudam ou trabalham, além de informá-los sobre acontecimentos de outras escolas</p>
                </div>
                <div>
                    <h1 className='text-center text-2xl  font-bold text-purple-500'>Qual é a nossa missão?</h1>
                    <p className='opacity-70'>  O objetivo do portal de notícias Academic News é a integração de escolas públicas por meio de notícias. Informando os alunos, professores e agentes sobre o que acontece na escola em que estudam ou trabalham, além de informá-los sobre acontecimentos de outras escolas.</p>
                </div>
                <div>
                    <h1 className='text-center text-2xl  font-bold text-purple-500'>O que é a nossa Visão</h1>
                    <p className='opacity-70'>  A Academic News, deseja ser uma referência na divulgação e qualidade de notícias. Visualizando o futuro de seus usuários de forma positiva com a utilização da plataforma, além de contribuir com a diminuição das fake news no contexto educacional do Brasil.</p>
                </div>
                <div>
                    <h1 className='text-center text-2xl  font-bold text-purple-500'>O que é a Academic News?</h1>
                    <p className='opacity-70'>O objetivo do portal de notícias Academic News é a integração de escolas públicas por meio de noticias. Informando os alunos, professores e agentes sobre o que acontece na escola em que estudam ou trabalham, além de informá-los sobre acontecimentos de outras escolas</p>
                </div>
                <div>
                    <h1 className='text-center text-2xl  font-bold text-purple-500'>O que é a Academic News?</h1>
                    <p className='opacity-70'>Os nossos principais valores são a integridade, segurança, privacidade e excelência nos serviços. Veja um pouco mais sobre eles a baixo.</p>
                    <ul className=' list-disc'>
                        <li>Integridade: agimos de maneira honesta e ética, mantendo a transparência e construindo relações de confiança com nossos usuários.</li>
                        <li>Segurança: valorizamos a segurança, mantendo senhas, e-mails e dados pessoais protegidos com nosso sistema de segurança, sem que funcionários sem treinamento utilizem ou tenham acesso aos dados.</li>
                        <li>Privacidade: nenhuma informação é passada para terceiros sem a sua conscientização e autorização, essas informações caso autorizadas podem ser usadas como métricas da plataforma, ou caso você deseje, utilizar os serviços de plataformas parceiras.</li>
                        <li>Excelência nos serviços: nossos serviços são verificados e otimizados, para que você consiga utilizar o máximo do sistema sem problemas de desempenho e usabilidade.</li>
                    </ul>
                </div>
            </div>
        </section>
        <Video/>
        <Footer/>
    </>
  )
}
