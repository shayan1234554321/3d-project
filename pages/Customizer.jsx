import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { downloadCanvasToImage, reader } from "../config/helpers";
import { EditorTabs, FilterTabs, DecalTypes } from "../config/constants";
import { fadeAnimation, slideAnimation } from "../config/motion";
import { ColorPicker, CustomButton, FilePicker, Tab } from "../components";
import { useStateContext } from "@/context/stateContext";

const Customizer = () => {
  const {
    intro,
    setIntro,
    setIsLogoTexture,
    setIsFullTexture,
    setLogoDecal,
    setFullDecal,
  } = useStateContext();

  const [file, setFile] = useState("");

  const [activeEditorTab, setActiveEditorTab] = useState("");
  const [activeFilterTab, setActiveFilterTab] = useState({
    logoShirt: true,
    stylishShirt: false,
  });

  const generateTabContent = () => {
    switch (activeEditorTab) {
      case "colorpicker":
        return <ColorPicker />;
      case "filepicker":
        return <FilePicker file={file} setFile={setFile} readFile={readFile} />;
      default:
        return null;
    }
  };

  const handleDecals = (type, result) => {
    const decalType = DecalTypes[type];

    if (decalType.stateProperty == "logoDecal") {
      setLogoDecal(result);
    } else {
      setFullDecal(result);
    }

    if (!activeFilterTab[decalType.filterTab]) {
      handleActiveFilterTab(decalType.filterTab);
    }
  };

  const handleActiveEditorChange = (tab) => {
    if (activeEditorTab === tab.name) {
      setActiveEditorTab("");
    } else {
      setActiveEditorTab(tab.name);
    }
  };

  const handleActiveFilterTab = (tabName) => {
    switch (tabName) {
      case "logoShirt":
        setIsLogoTexture(!activeFilterTab[tabName]);
        break;
      case "stylishShirt":
        setIsFullTexture(!activeFilterTab[tabName]);
        break;
      case "downloadImage":
        downloadCanvasToImage();
        break;
      default:
        setIsLogoTexture(true);
        setIsFullTexture(false);
        break;
    }

    if (tabName !== "downloadImage")
      setActiveFilterTab((prevState) => {
        return {
          ...prevState,
          [tabName]: !prevState[tabName],
        };
      });
  };

  const readFile = (type) => {
    if(file){
      reader(file).then((result) => {
        handleDecals(type, result);
        setActiveEditorTab("");
      });
    }
  };

  return (
    <AnimatePresence>
      {!intro && (
        <>
          <motion.div
            key="custom"
            className="absolute top-0 left-0 z-10"
            {...slideAnimation("left")}
          >
            <div className="flex items-center min-h-screen">
              <div className="editortabs-container tabs">
                {EditorTabs.map((tab) => (
                  <Tab
                    key={tab.name}
                    tab={tab}
                    handleClick={() => handleActiveEditorChange(tab)}
                  />
                ))}

                {generateTabContent()}
              </div>
            </div>
          </motion.div>

          <motion.div
            className="absolute z-10 top-5 right-5"
            {...fadeAnimation}
          >
            <CustomButton
              type="filled"
              title="Go Back"
              handleClick={() => setIntro(true)}
              customStyles="w-fit px-4 py-2.5 font-bold text-sm"
            />
          </motion.div>

          <motion.div
            className="filtertabs-container"
            {...slideAnimation("up")}
          >
            {FilterTabs.map((tab) => (
              <Tab
                key={tab.name}
                tab={tab}
                isFilterTab
                isActiveTab={activeFilterTab[tab.name]}
                handleClick={() => handleActiveFilterTab(tab.name)}
              />
            ))}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Customizer;
