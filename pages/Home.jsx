import { motion, AnimatePresence } from "framer-motion";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";
import { useStateContext } from "@/context/stateContext";
import logo from "@/assets/logo.png";

const Home = () => {
  const { intro, setIntro } = useStateContext();

  return (
    <AnimatePresence>
      {intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img src={logo.src} alt="logo" className="w-17 object-contain" />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                GET <br className="xl:block hidden" /> IT DONE
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-white opacity-50 text-base">
                Design your custom, one-of-a-kind shirt using our cutting-edge{" "}
                <strong>3D personalization</strong> feature. Explore your
                creativity and shape your distinctive fashion.
              </p>

              <CustomButton
                type="filled"
                title="Customize It"
                handleClick={() => setIntro(false)}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
