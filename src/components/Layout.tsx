import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  MediaQuery,
  Burger,
  useMantineTheme,
  createStyles,
} from "@mantine/core";
import HeaderApp from "./Header/Header";
import { Navigation } from "./Navbar/Navigation";
import { Outlet } from "react-router-dom";
import { Footer as MyFooter } from "./Footer/Footer";

const useStyles = createStyles((theme) => ({
  nav: {
    transition: "all 0.2s linear",
  },
}));

export default function Layout() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  const { classes } = useStyles();
  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[9]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          className={classes.nav}
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Navigation />
        </Navbar>
      }
      footer={
       
        <Footer height={105}>
          <MyFooter />
        </Footer>
        
      }
      header={
        <Header height={70} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <HeaderApp />
          </div>
        </Header>
      }
    >
      <Outlet />
    </AppShell>
  );
}
