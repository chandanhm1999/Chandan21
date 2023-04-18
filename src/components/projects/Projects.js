import React from 'react'
import Title from '../layouts/Title'

import { projectOne, projectTwo, projectThree, Figma, data, portofilo } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
    return (
        <section
            id="projects"
            className="w-full py-20 border-b-[1px] border-b-block"
        >
            <div className="flex justify-center items-center text-center">
                <Title
                    title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
                    des="My Projects"
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
                <ProjectsCard
                    title="SPOTIFY APP-CLONE"
                    des="
                    Spotify is a music service and it provides it's API for development. We have used Spotify Api for creating a Spotify Clone with React JS, Styled Components using Spotify Api and Context API."
                    src={projectOne}
                    src1="https://github.com/chandanhm1999/spotify-clone-webapp"
                    src2="https://spotify-clone-webapp.vercel.app"
                />
                <ProjectsCard
                    title="E-commerce Website"
                    des=" To build an ecommerce multi-page application in React. Responsive Design, React Redux, Context Api, Orders in cart & wishlist, &  Initializing a React Ecommerce Project.!"
                    src={projectTwo}
                    src1="https://github.com/chandanhm1999/C-devops_Cart-Ecommerce-App"
                    src2="https://c-devops-cart-ecommerce-app.vercel.app"
                />
                <ProjectsCard
                    title="Restaurant UI Design"
                    des=" Designing a restaurant app using React Next.js CSS & JavaScript to be responsive design and functional.!
                    We can book a Pizza By this store & we can contact the store by entering the email"
                    src={projectThree}
                    src1="https://github.com/chandanhm1999/Fast-Pizza-Restaurant-React-app-UI-Design"
                    src2="https://fast-pizza-restaurant-react-app-ui-design.vercel.app/"
                />
                <ProjectsCard
                    title="My-Portfolio-Website"
                    des=" A Front-End Developer portfolio serves to showcase your skills, past projects, and experience with front-end development.!"
                    src={portofilo}
                    src1="https://github.com/chandanhm1999/My-Protfolio-Website-Chandan-HM"
                    src2="https://my-protfolio-web-chandan-hm.vercel.app/"
                />
                <ProjectsCard
                    title="User Authentication App"
                    des=" Accept new user details fields to update and store the updated data in an encrypted format.!"
                    src={Figma}
                    src1="https://github.com/chandanhm1999/loginpage-i2e-reactjs"
                    src2="https://react-js-loginpage-letsendorse.vercel.app/"
                />
                <ProjectsCard
                    title="JAVA-Data Structures & Algorithms"
                    des=" This Project Concentrates On the Implementation of Linear Data Structures Like *.Array *.Stack *.Queue *.Circular Queue *.Singly Linked List *.doubly Linked List!"
                    src={data}
                    src1="https://github.com/chandanhm1999/Java-Mini-Project-1"
                    src2="https://github.com/chandanhm1999/Java-Mini-Project-1/blob/main/chandan%20hm%208105114625.jar"
                />
                
            </div>
        </section>
    );
}

export default Projects
