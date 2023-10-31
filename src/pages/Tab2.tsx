import { IonButton, IonContent, IonHeader, IonImg, IonItemGroup, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useEffect, useState } from 'react';
import './Tab2.css';

const Tab2: React.FC = () => {
  const [dadosDaAPI, setDadosDaAPI] = useState<any>(null);

  const buscarDadosDaAPI = async () => {
    try {
      const resposta = await fetch('https://picsum.photos/200/300');
      const imagemBlob = await resposta.blob();
      const urlImagem = URL.createObjectURL(imagemBlob); 
      setDadosDaAPI({ url: urlImagem });
    } catch (erro) {
      console.error('Erro ao buscar dados da API:', erro);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='title-header'>API</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonItemGroup className="container-2">

          {dadosDaAPI && (
              <IonImg 
              className='image-border'
              src={dadosDaAPI.url}
              alt='Imagem API'
              ></IonImg>
          )}

          <IonButton id="botaoAPI" onClick={buscarDadosDaAPI}> Buscar imagem da API </IonButton>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
