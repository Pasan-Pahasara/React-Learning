import { Component } from "react";
import Header from "../../components/Header";
import ContactForm from "../../components/ContactForm";

export default class Contact extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="p-6 mt-16">
          <span className="flex flex-col space-y-3 text-center">
            <h1>Contact Us</h1>
            <p className="px-28">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque
              accusantium quia dolorum eaque pariatur inventore obcaecati,
              quaerat earum cupiditate aliquid. Architecto et tempore incidunt
              corrupti eum veniam tempora qui nam. Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Repudiandae dolores totam,
              laudantium molestiae a nihil aliquid eligendi dolor quas vero est
              quo labore voluptas deleniti eum atque possimus, non in! Lorem
              ipsum dolor sit amet, consectetur adipisicing elit. Officia amet
              saepe tempora mollitia aut, rem impedit esse commodi magni fuga?
              Laudantium vitae eos commodi exercitationem ipsam, ab magnam
              aliquam dolorum?Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. In, culpa facere quasi porro maxime ipsam
              reiciendis iste quam itaque fugit nam fugiat sint, illum, adipisci
              ullam delectus eos! Quia, beatae?
            </p>
          </span>

          <div className="mt-3">
            <ContactForm />
          </div>
        </div>
      </>
    );
  }
}
