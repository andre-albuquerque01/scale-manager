import iconsGitHub from '../../img/iconsGithub.png';
import iconsLinkedin from '../../img/iconsLinkedin.jpg';
export default function Footer() {
    return (
        <footer>
            <section className="bg-black h-full bottom-0 mb-0 mt-20">
                <div className="flex justify-evenly text-white">
                    <div className="w-2/5 space-y-3 mt-8">
                        <h1 className="text-2xl">Faculdade Senac</h1>
                        <p>Uma faculdade de excelência...</p>
                    </div>
                    <div className="w-2/5 text-right text-2xl space-y-3 mt-8">
                        <h1>Social media</h1>
                        <div className="flex justify-end items-center space-x-4">
                            <a href="" target="_blank" rel="noopener noreferrer">
                                <img src={iconsGitHub} alt="" className='w-10' title='GitHub' />
                            </a>
                            <a href="https://www.linkedin.com/school/faculdadesenacdf/" target="_blank" rel="noopener noreferrer">
                                <img src={iconsLinkedin} alt="" className='w-14' title='Linkedin' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t-2 rounded-sm border-white w-1/2 mx-auto my-4 mt-8"></div>
                <div className='text-white text-center text-xs'>&copy;Copyright 2023.</div>
            </section>
        </footer>
    )
}