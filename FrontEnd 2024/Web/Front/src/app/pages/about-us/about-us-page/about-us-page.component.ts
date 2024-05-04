import { Component } from '@angular/core';
import { Bullet } from 'src/app/models/about-us/about-us-model';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.css']
})

export class AboutUsComponent {
  mainDescription: string;
  bullets: Bullet[];
  downloadText: string;
  greetingText: string;

  constructor() {
    this.mainDescription = 'En Librería Franklin, hemos creado una plataforma digital donde podrás sumergirte en el apasionante mundo de la lectura desde la comodidad de tu hogar. Tendrás acceso a un extenso catálogo de libros de diversas temáticas y géneros.';
    this.bullets = [
      {
        subtitle: 'Explora y Encuentra',
        text: 'Nuestra plataforma te permite explorar fácilmente nuestro catálogo mediante potentes filtros que hacen que tu búsqueda sea rápida y eficiente. Ya sea que estés buscando un clásico de la literatura, la última novedad del mercado o un libro sobre un tema específico, lo encontrarás con solo unos clics.',
        icon: '🔎'
      },
      {
        subtitle: 'Información Detallada',
        text: 'Además de navegar por nuestro catálogo, podrás acceder a información detallada sobre cada libro. Desde sinopsis y reseñas hasta detalles sobre el autor, te proporcionamos toda la información que necesitas para tomar una decisión informada sobre tu próxima lectura.',
        icon: '📄'
      },
      {
        subtitle: 'Compra con Confianza',
        text: 'Una vez que hayas encontrado ese libro que tanto deseas, ¡es hora de comprarlo! Con unos simples pasos, podrás adquirir tus libros favoritos y tenerlos en tus manos en poco tiempo. Y si lo prefieres, puedes optar por la opción de envío para recibir tus libros directamente en la puerta de tu casa.',
        icon: '🛒'
      },
      {
        subtitle: 'Gestiona tu Experiencia',
        text: 'En Librería Franklin, ponemos el control en tus manos. En tu perfil personal, tendrás acceso a tu historial de compras, donde podrás revisar tus pedidos anteriores y realizar un seguimiento de tus lecturas. También podrás actualizar tus datos personales y de envío en cualquier momento para garantizar una experiencia personalizada y sin contratiempos.',
        icon: '💻'
      },
      {
        subtitle: 'Únete a la Comunidad de Lectores',
        text: 'Únete a nuestra comunidad de lectores apasionados y descubre nuevas lecturas, comparte tus opiniones y encuentra recomendaciones personalizadas. En Librería Franklin, estamos comprometidos a fomentar el amor por la lectura y a hacer que tu experiencia de compra de libros sea lo más placentera posible.',
        icon: '📖'
      }
    ];
    this.downloadText = 'Descarga nuestra aplicación móvil o visita nuestra página web hoy mismo y déjate llevar por el maravilloso mundo de la lectura con Librería Franklin.',
    this.greetingText = '¡Empieza tu viaje literario hoy mismo!';
  };
}
