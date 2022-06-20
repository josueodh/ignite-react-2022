import "./global.css";
import { Header } from "./components/Header";
import { Post } from "./components/Post";
import styles from "./App.module.css";
import { Sidebar } from "./components/Sidebar";
export function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Josué Heringer"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. A est qui, et totam dignissimos aliquam accusamus repellendus libero facilis ex soluta nobis tempore, animi ipsum praesentium voluptate nesciunt perspiciatis rerum!"
          />
          <Post author="Lara Alvim" content="Um novo post muito legal!" />
        </main>
      </div>
    </div>
  );
}
