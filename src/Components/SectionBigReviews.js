import React from 'react';
import styles from './SectionBigReviews.module.css';
import UserRatingCard from './UserRatingCard';

const SectionBigReviews = () => {
  //Aqui o mesmo esquema das avaliações da home, só que vai ter mais componentes de avaliação
  return (
    <section className={styles.section}>
      <div className="container-xl">
        <h2>Veja as avaliações de alguns do nossos clientes</h2>
        <div className="row justify-content-between align-items-center">
          <UserRatingCard
            plan={'Adventurer'}
            text={`Eu e meus amigos adoramos a viagem que fizemos com a ajuda desse site! Conseguimos escolher os esportes radicais que mais queríamos experimentar, e ainda ajustar tudo de acordo com o nosso orçamento. Foi uma experiência incrível e com certeza vamos usar o serviço novamente`}
          />
          <UserRatingCard
            plan={'Adventurer'}
            text={`Sempre quis praticar paraquedismo, mas nunca soube como começar. Foi então que encontrei esse site e decidi dar uma chance. Foi super fácil e rápido escolher a melhor opção para a minha região e para o meu bolso. Agora eu não vejo a hora de repetir a experiência!`}
          />
          <UserRatingCard
            plan={'Grátis'}
            text={`Se você é como eu, que adora esportes radicais mas tem um orçamento limitado, esse é o site perfeito para você! Consegui fazer a viagem dos meus sonhos, com direito a rapel, bungee jumping e muito mais, tudo dentro do meu orçamento. O suporte da equipe do site, superou todas as minhas expectativas`}
          />
          <UserRatingCard
            plan={'Adventurer Plus'}
            text={`Eu não sou muito fã de esportes radicais, mas queria surpreender meu namorado que é um grande aventureiro. Encontrei esse site e, com a ajuda deles, consegui preparar uma viagem perfeita para nós dois. Meu namorado amou e eu também! As atividades eram seguras e bem planejadas.`}
          />
          <UserRatingCard
            plan={'Grátis'}
            text={`Se você é como eu, que adora esportes radicais mas tem um orçamento limitado, esse é o site perfeito para você! Consegui fazer a viagem dos meus sonhos, com direito a rapel, bungee jumping e muito mais, tudo dentro do meu orçamento. O suporte da equipe do site, superou todas as minhas expectativas`}
          />
          <UserRatingCard
            plan={'Adventurer'}
            text={`Eu e meus amigos adoramos a viagem que fizemos com a ajuda desse site! Conseguimos escolher os esportes radicais que mais queríamos experimentar, e ainda ajustar tudo de acordo com o nosso orçamento. Foi uma experiência incrível e com certeza vamos usar o serviço novamente`}
          />
          <UserRatingCard
            plan={'Adventurer Plus'}
            text={`Eu não sou muito fã de esportes radicais, mas queria surpreender meu namorado que é um grande aventureiro. Encontrei esse site e, com a ajuda deles, consegui preparar uma viagem perfeita para nós dois. Meu namorado amou e eu também! As atividades eram seguras e bem planejadas.`}
          />
          <UserRatingCard
            plan={'Adventurer'}
            text={`Sempre quis praticar paraquedismo, mas nunca soube como começar. Foi então que encontrei esse site e decidi dar uma chance. Foi super fácil e rápido escolher a melhor opção para a minha região e para o meu bolso. Agora eu não vejo a hora de repetir a experiência!`}
          />
        </div>
      </div>
    </section>
  );
};

export default SectionBigReviews;
