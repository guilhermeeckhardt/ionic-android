import { IonAlert, IonButton, IonContent, IonHeader, IonImg, IonItemGroup, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle className='title-header'>IONIC</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className='body'>
        <IonItemGroup className='container'>
          <IonTitle className='title'>Bem-vindo ao Meu site</IonTitle>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quis, asperiores consequatur unde labore voluptas nemo quo, laboriosam consequuntur nostrum beatae. Doloribus voluptates eos quia beatae, odio perferendis tempore architecto quasi dolorum, vitae sequi eligendi voluptas. Porro totam mollitia magni ratione omnis autem at quam repellendus assumenda, harum ad voluptate impedit. Quo fugit magni quaerat, voluptate perferendis eveniet neque rerum et cum quae tempore deleniti, nulla non quas esse iste. Doloribus vero architecto dolorem quisquam quae cumque nobis aspernatur dolore deleniti, voluptatem necessitatibus harum ad veniam ipsum sequi quis saepe doloremque vitae nesciunt at. Labore officia modi in corporis officiis.
          </p>

          <IonButton id="present-alert">Clique Aqui</IonButton>
          <IonAlert
            trigger="present-alert"
            header="Alerta"
            message="Olá, Bem-Vindo ao meu site interativo!"
            buttons={['OK']}
          ></IonAlert>

          <IonTitle className='sub-title'>Seção Importante</IonTitle>

          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic quis, asperiores consequatur unde labore voluptas nemo quo, laboriosam consequuntur nostrum beatae. Doloribus voluptates eos quia beatae, odio perferendis tempore architecto quasi dolorum, vitae sequi eligendi voluptas. Porro totam mollitia magni ratione omnis autem at quam repellendus assumenda, harum ad voluptate impedit. Quo fugit magni quaerat, voluptate perferendis eveniet neque rerum et cum quae tempore deleniti, nulla non quas esse iste. Doloribus vero architecto dolorem quisquam quae cumque nobis aspernatur dolore deleniti, voluptatem necessitatibus harum ad veniam ipsum sequi quis saepe doloremque vitae nesciunt at. Labore officia modi in corporis officiis.
          </p>

          <IonImg
            className='image'
            src="https://www.unijui.edu.br/images/stories/manual_identidade/marcas/download.php?arquivo=marca.png"
            alt="Logo Unijui"
          ></IonImg>
        </IonItemGroup>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
