import { DiAndroid, DiApple, DiAppstore, DiAtom, DiBackbone, DiCoffeescript, DiCss3, DiCssTricks, DiDoctrine, DiGithub, DiHtml5, DiPhp, DiReact } from "react-icons/di";
const Tech = () => {
  return (
<div>
    <div className=" py-2  text-center ">
       <h1 className="text-3xl font-semibold py-4">Technologies I Use</h1>
       <p>Lorem ipsum dolor sit amet consectetur consectetur
adipisicing elit. Ratione, voluptates?
</p>
    </div>
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-4 place-items-center py-4 gap-y-4" >

      <DiAndroid  className='animate-bounce' size={150} />
      <DiReact className="hover:text-pink-800 animate-ping" size={150} />
      <DiCss3 className="animate-pulse" size={150} />
      <DiGithub className="animate-spin" size={150} />
      <DiCssTricks className="animate-spin" size={150} />
      <DiPhp className="animate-pulse" size={150} />
      <DiCoffeescript className="animate-bounce" size={150} />
      <DiDoctrine className="animate-bounce" size={150} />
      <DiAtom className="animate-spin" size={150} />
      <DiApple className="animate-bounce" size={150} />
      
    </div>
    </div>
  )
}
export default Tech