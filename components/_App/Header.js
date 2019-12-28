import Router, { useRouter } from "next/router";
import NProgress from "nprogress";
import Link from "next/link";
import Container from "../ui/Container";
import Menu from "../ui/Menu";

//import Menu from "../ui/Menu";
import { handleLogout } from "../../utils/auth";

Router.onRouteChangeStart = () => NProgress.start();
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();

function Header({ user }) {
  const router = useRouter();
  const isRoot = user && user.role === "root";
  const isAdmin = user && user.role === "admin";
  const isRootOrAdmin = isRoot || isAdmin;

  function isActive(route) {
    return route === router.pathname;
  }

  return (
    <div className="main-header">
      <Container>
        <Link href="/">
          <a className="logo-main">
            <img src="/static/logo.svg" width="40" alt="" />
          </a>
        </Link>

        <Menu stackable>
          <Menu.Item active={isActive("/cart")}>
            <Link href="/cart">
              <a>Cart</a>
            </Link>
          </Menu.Item>

          {isRootOrAdmin && (
            <Menu.Item active={isActive("/create")}>
              <Link href="/create">
                <a>Create</a>
              </Link>
            </Menu.Item>
          )}

          {user ? (
            <>
              <Menu.Item active={isActive("/account")}>
                <Link href="/account">
                  <a>Account</a>
                </Link>
              </Menu.Item>

              <Menu.Button onClick={handleLogout}>Logout</Menu.Button>
            </>
          ) : (
            <>
              <Menu.Item active={isActive("/login")}>
                <Link href="/login">
                  <a>Login</a>
                </Link>
              </Menu.Item>

              <Menu.Item active={isActive("/signup")}>
                <Link href="/signup">
                  <a>Signup</a>
                </Link>
              </Menu.Item>
            </>
          )}
        </Menu>
      </Container>
    </div>
  );
}

export default Header;
