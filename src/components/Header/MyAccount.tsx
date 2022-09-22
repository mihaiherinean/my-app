import { Menu, Button,Text, createStyles } from "@mantine/core";
import { AiOutlineLogin } from "react-icons/ai";
import { BsPersonPlus } from "react-icons/bs";
import { VscAccount } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { NavLink as MantineNavLink } from "@mantine/core";

const useStyles = createStyles((theme)=>({
  text: {
    marginLeft: 8,
    '@media (max-width: 500px)': {
      display: 'none',
    },
  }
  })

)

function MyAccount() {
  const {classes} = useStyles();
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button
          variant="outline"
          size="xs"
          color="gray.3"
        >
          <VscAccount size={14} />
          <Text className={classes.text}>Account</Text>
        </Button>
      </Menu.Target>
      <Menu.Dropdown>
        <Menu.Item  style={{padding:1}}>
          <NavLink to="/login">
            <MantineNavLink label="Login" icon={<AiOutlineLogin size={14} />} />
          </NavLink>
        </Menu.Item>
        <Menu.Item style={{padding:1}}>
        <NavLink to="/sign-in" >
            <MantineNavLink label="Sign In" icon={<BsPersonPlus size={14} />}/>
          </NavLink>
          </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default MyAccount;
