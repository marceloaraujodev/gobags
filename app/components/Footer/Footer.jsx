import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";

import c from "./Footer.module.css";

export default function Footer() {
  return (
    <div className={c.cont}>
      <p className={c.contato}>Contato</p>
      <div className={c.wrapper}>
        <div className={c.icons}>
          <div className={c.iconCont}>
            <FaPhoneAlt className={c.iconItem} /> 55 11 91581-8881
          </div>
          <div className={c.iconCont}>
            <MdOutlineMailOutline className={c.iconItem} /> gohb@gohb.com.br
          </div>
          <div className={c.iconCont}>
            <FaWhatsapp className={c.iconItem} /> 55 11 91581-8881
          </div>
          <div className={c.iconCont}>
            <FaInstagram className={c.iconItem} /> gobags.br
          </div>
          <div className={c.iconCont}>
            <div>
              <FaLocationDot className={c.iconItem} />
            </div>
            <div>Rua Diogo Moreira, 132, Conj. 1010, Pinheiros, São Paulo, SP, Brasil, CEP 05423 010</div>
          </div>
        </div>
        {/* <div className={c.divider}></div> */}
        <div className={c.form}>
          <div className={c.name}>
            <label>
              Nome:
              <input type="text" />
            </label>
            <label>
              Sobrenome:
              <input type="text" />
            </label>
          </div>
          <label>
            E-mail:
            <input type="text" />
          </label>
          <label>
            Mensagem:
            <textarea placeholder="Mensagem"></textarea>
          </label>
          <label>
            <button type="submit">Enviar</button>
          </label>
        </div>
      </div>
    </div>
  );
}
