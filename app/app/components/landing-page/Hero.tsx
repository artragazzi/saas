import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import UserCard from "@/app/components/communs/user-card";
import { TotalVisits } from "../communs/total-visits";
import { ProjectCard } from "../communs/product-card";
export default function Hero() {
  return (
    <div className="flex items-center h-screen">
      <div className="w-full flex flex-col gap-2">
        <h1 className="text-5xl font-bold text-white leading-16">
          Seus projetos e redes sociais em um único link
        </h1>
        <h2 className="text-xl leading-6">
          Crie sua própria página de projetos e compartilhe eles com o mundo.
        <br />
        Acompanhe o engajamento com Analytics e cliques
        </h2>
        <div className="flex items-center gap-2 w-full mt-8">
          <span className="text-white text-xl">urlbase.com</span>

          <Input type="text" placeholder="Seu Link" className="h-12" />
          <Button className="h-12 font-bold bg-purple-950 hover:bg-purple-900 cursor-pointer">Criar agora</Button>
        </div>
      </div>
      <div className="w-full flex items-center justify-center bg-[radial-gradient(circle_at_50%_50%,#482DBB_0px,transparent_70%)]">
        <div className="relative">
          <UserCard></UserCard>
          <div className="absolute -bottom-[7%] -right-[45%]">
            <TotalVisits />
          </div>
          <div className="absolute top-[30%] -left-[45%] -z-10">
            <ProjectCard courseTitle="Lorem ipsum" imgSrc="/project1.jpg" />
          </div>
          <div className="absolute top-[5%] -left-[55%] -z-10">

            <ProjectCard courseTitle="Qui excepteur dolor" imgSrc="/project2.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}
