import Image from 'next/image';

export default function Description() {
  return (
    <div className="flex flex-col md:flex-row items-start justify-between p-6 space-y-6 md:space-y-0">
      <div className="md:w-1/2 space-y-4">
        <h4 className="text-lg font-Cabinet Grotesk">Description produit</h4>
        <p className="text-body-primary-light font-Geist text-sm leading-[18.2px] text-left"
         style={{
             textUnderlinePosition: 'from-font',
             textDecorationSkipInk: 'none',}}>
              <span>
          Festi vous propose à la location un/une "Jewel – grand couteau/10pc"
          pour votre évenement et ce dès 0,35 € </span>
          <span>/ pièce (HTVA).
          Que ce soit pour votre mariage, une fête d'anniversaire ou du personnel,
          ce produit a fait l'objet</span>
          <span>d'une sélection rigoureuse par notre équipe.
          Il est en location chez nous sous la référence "VAJGC". 
          Nous</span> 
          <span>sommes à votre disposition pour que les événements de nos clients, 
          même en last-minute, soient toujours une </span>
          <span>réussite. Vous pourrez trouver toute une série d'autres produits à louer de ce type dans la catégorie "Art de la</span>
          <span>Table".</span>
        </p>
      </div>


      <div className="md:w-1/2 flex flex-col items-center space-y-4">
        <Image
          src="/images/Group 129.png"
          alt="Group 129"
          className="w-full"
          width={700}
          height={300}
        />
        <Image
          src="/images/Group 128.png"
          alt="Group 128"
          className="w-full"
          width={700}
          height={300}
        />
      </div>
    </div>
  );
}
