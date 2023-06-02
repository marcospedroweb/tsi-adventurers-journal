import React from 'react';
import UserRatingCard from './UserRatingCard';

const UsersPlans = () => {
  return (
    <section style={{ margin: '92px auto' }}>
      <div className="container-xl text-center">
        <h2 className="fw-bold mb-4" style={{ fontSize: '2.5rem' }}>
          Veja as avaliações de alguns do nossos clientes
        </h2>
        <div className="row justify-content-between align-items-center">
          <UserRatingCard
            plan={'Adventurer Plus'}
            text={`Eu e meus amigos adoramos a viagem que fizemos com a ajuda desse site! Conseguimos escolher os esportes radicais que mais queríamos experimentar, e ainda ajustar tudo de acordo com o nosso orçamento. Foi uma experiência incrível e com certeza vamos usar o serviço novamente`}
          />
          <UserRatingCard
            plan={'Adventurer'}
            text={`Sempre quis praticar paraquedismo, mas nunca soube como começar. Foi então que encontrei esse site e decidi dar uma chance. Foi super fácil e rápido escolher a melhor opção para a minha região e para o meu bolso. Agora eu não vejo a hora de repetir a experiência!`}
          />
          <UserRatingCard
            plan={'Adventurer Plus'}
            text={`Se você é como eu, que adora esportes radicais mas tem um orçamento limitado, esse é o site perfeito para você! Consegui fazer a viagem dos meus sonhos, com direito a rapel, bungee jumping e muito mais, tudo dentro do meu orçamento. O suporte da equipe do site, superou todas as minhas expectativas`}
          />
          <UserRatingCard
            plan={'Adventurer Plus'}
            text={`Eu não sou muito fã de esportes radicais, mas queria surpreender meu namorado que é um grande aventureiro. Encontrei esse site e, com a ajuda deles, consegui preparar uma viagem perfeita para nós dois. Meu namorado amou e eu também! As atividades eram seguras e bem planejadas.`}
          />
        </div>
      </div>
    </section>
  );
};

export default UsersPlans;
