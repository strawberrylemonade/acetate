import { useMeasure } from 'react-use';

const Picture = ({ blur = 24, className }) => {

  const image = {
    "id": "fb020521-be4b-4337-814f-7d061971cc10",
    "alt": "The world!",
    "ratio": 1.502439024390244,
    "original": "https://acetonedev.blob.core.windows.net/images/fb020521-be4b-4337-814f-7d061971cc10-original",
    "standard": "https://acetonedev.blob.core.windows.net/images/fb020521-be4b-4337-814f-7d061971cc10-standard",
    "thumbnail": "https://acetonedev.blob.core.windows.net/images/fb020521-be4b-4337-814f-7d061971cc10-thumbnail",
    "placeholder": {
      "backgroundImage": "linear-gradient(90deg, rgb(187,202,215) 10%,rgb(193,207,219) 10% 20%,rgb(189,201,213) 20% 30%,rgb(169,181,193) 30% 40%,rgb(133,146,158) 40% 50%,rgb(94,105,117) 50% 60%,rgb(53,63,73) 60% 70%,rgb(48,47,48) 70% 80%,rgb(43,26,14) 80% 90%,rgb(15,13,11) 90% 100%),linear-gradient(90deg, rgb(188,196,200) 10%,rgb(199,208,215) 10% 20%,rgb(207,215,223) 20% 30%,rgb(204,216,225) 30% 40%,rgb(206,220,230) 40% 50%,rgb(198,215,230) 50% 60%,rgb(165,188,210) 60% 70%,rgb(134,156,177) 70% 80%,rgb(82,78,76) 80% 90%,rgb(25,23,22) 90% 100%),linear-gradient(90deg, rgb(181,187,186) 10%,rgb(178,186,191) 10% 20%,rgb(172,185,194) 20% 30%,rgb(179,193,203) 30% 40%,rgb(173,189,201) 40% 50%,rgb(162,181,197) 50% 60%,rgb(144,170,191) 60% 70%,rgb(138,160,179) 70% 80%,rgb(81,93,104) 80% 90%,rgb(45,55,66) 90% 100%),linear-gradient(90deg, rgb(164,167,164) 10%,rgb(174,179,179) 10% 20%,rgb(148,165,176) 20% 30%,rgb(138,157,175) 30% 40%,rgb(122,145,166) 40% 50%,rgb(141,159,175) 50% 60%,rgb(163,176,191) 60% 70%,rgb(135,154,175) 70% 80%,rgb(98,115,134) 80% 90%,rgb(99,113,132) 90% 100%),linear-gradient(90deg, rgb(142,153,160) 10%,rgb(173,183,189) 10% 20%,rgb(168,180,190) 20% 30%,rgb(96,120,142) 30% 40%,rgb(89,114,137) 40% 50%,rgb(98,120,141) 50% 60%,rgb(102,123,145) 60% 70%,rgb(94,114,138) 70% 80%,rgb(89,107,132) 80% 90%,rgb(89,103,126) 90% 100%),linear-gradient(90deg, rgb(92,105,117) 10%,rgb(122,134,146) 10% 20%,rgb(148,158,168) 20% 30%,rgb(152,164,175) 30% 40%,rgb(73,96,118) 40% 50%,rgb(64,89,113) 50% 60%,rgb(52,80,106) 60% 70%,rgb(63,87,111) 70% 80%,rgb(47,67,92) 80% 90%,rgb(38,55,77) 90% 100%),linear-gradient(90deg, rgb(87,100,112) 10%,rgb(92,105,118) 10% 20%,rgb(77,90,106) 20% 30%,rgb(87,99,115) 30% 40%,rgb(51,70,91) 40% 50%,rgb(44,65,88) 50% 60%,rgb(46,65,87) 60% 70%,rgb(39,58,80) 70% 80%,rgb(36,52,71) 80% 90%,rgb(31,45,63) 90% 100%)",
      "backgroundPosition": "0 0 ,0 16.666666666666664%,0 33.33333333333333%,0 50%,0 66.66666666666666%,0 83.33333333333334%,0 100%",
      "backgroundSize": "100% 14.285714285714286%",
      "backgroundRepeat": "no-repeat"
    }
  }

  const [ref, { width }] = useMeasure();

  return image ? <a ref={ref} className={`${className} overflow-hidden relative`} style={{ height: width / image.ratio }} href={image.original} target="_blank" alt={image.alt}>
    <div className="absolute w-full h-full bg-white" style={{ ...image.placeholder, filter: `blur(${blur}px)`, transform: 'scale(1.2)' }} />
    <div className="absolute w-full h-full bg-cover bg-center animate-fadein" style={{ backgroundImage: `url('${image.standard}')` }}></div>
  </a> :
    <a className={`${className} relative`}>
      <div className="absolute w-full h-full bg-gray-300"></div>
    </a>
}

export default Picture;