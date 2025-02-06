import React from "react";
import s from "./header.module.scss";
import { Button, Container, svgIcons } from "@/shared";
import Link from "next/link";
import Menu from "./menu";

export const Header: React.FC = () => {
  return (
    <header className={s.header}>
      <div className={s.top}>
        <Container className={s.topContainer}>
          <a href="tel:+78122191009">+7 (812) 219 10 09</a>
          <a href="mailto:digi@polis.com">digi@polis.com</a>
        </Container>
      </div>
      <Container className={s.bottomContainer}>
        <Link href="/" className={s.logo}>
          <img src="/logo.svg" alt="Digipolis" />
        </Link>
        <Menu />
        <div className={s.actions}>
          <Button variant="dark" className={s.mediaBtn}>
            {svgIcons.media.vk}
          </Button>
          <Button variant="dark" className={s.mediaBtn}>
            {svgIcons.media.telegram}
          </Button>
          <Button className={s.mailBtn}>Написать нам</Button>
        </div>
      </Container>
    </header>
  );
};
