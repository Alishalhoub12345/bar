import intgas from "../../images/Icons/gas_emission.png";
import fung from "../../images/Icons/fungal-resistance.png";
import bac from "../../images/Icons/bacterial_resistance.png";
import acoustic from "../../images/Icons/acoustics.png";
import aging from "../../images/Icons/anti-ageing.png";
import environment from "../../images/Icons/environment.png";
import fire from "../../images/Icons/fire_cert.png";
import heat from "../../images/Icons/heat-resistance.png";
import light from "../../images/Icons/light-diffusion.png";
import moisture from "../../images/Icons/moisture_resistance.png";
import uv from "../../images/Icons/uv-resistance.png";

export const SpecificationItems = [
  {
    label: "INTERIOR GAS EMISSION",
    icon: intgas,
    tooltip: {
      title_toggle: false,
      title: "INTERIOR GAS EMISSION",
      content: "VOC classification: A+",
    },
  },
  {
    label: "FUNGAL RESISTANCE",
    icon: fung,
    tooltip: {
      title_toggle: false,
      title: "FUNGAL RESISTANCE",
      content:
        "BARRILUX is resistant to fungal deposits.\nNo growth according to ASTM G 21-96.",
    },
  },
  {
    label: "ACOUSTICS",
    icon: acoustic,
    tooltip: {
      title_toggle: false,
      title: "ACOUSTICS",
      content:
        "BARRILUX renders excellent acoustic results while maintaining an excellent finish.\n\n" +
        "BARRILUX standard product: NRC = 0.75 according to ASTM C 423 (with insulation).\n" +
        "BARRILUX PF Ø 1.27mm: NRC = 1.00 according to ASTM C 423 (with insulation).\n" +
        "BARRILUX MPF 300: NRC = 1.00 according to ASTM C 423 (with insulation).",
    },
  },
  {
    label: "ANTI-AGEING",
    icon: aging,
    tooltip: {
      title_toggle: false,
      title: "ANTI-AGEING",
      content:
        "BARRILUX maintains its new fresh look over the years.",
    },
  },
  {
    label: "MOISTURE RESISTANCE",
    icon: moisture,
    tooltip: {
      title_toggle: false,
      title: "MOISTURE RESISTANCE",
      content:
        "BARRILUX is moist proof, dust proof and maintenance free.\n" +
        "Water vapor transmission < 50 g/m²·24h according to NF EN 14716 § 4.1.3",
    },
  },
  {
    label: "UV RESISTANCE",
    icon: uv,
    tooltip: {
      title_toggle: false,
      title: "UV RESISTANCE",
      content:
        "Behind glass: No visible change according to ASTM-D638.\n" +
        "Direct exposure: No visible change according to ASTM-D638.",
    },
  },
  {
    label: "FIRE CERTIFICATION",
    icon: fire,
    tooltip: {
      title_toggle: false,
      title: "FIRE CERTIFICATION",
      content:
        "Fire certification: Class 1 according to ASTM E-84 (UL test reports).\n" +
        "Fire certification B–s2,d0 & B–s1,d0 according to EN 13501-1 & EN 13501-1+A1 (LNE test reports).",
    },
  },
  {
    label: "HEAT RESISTANCE",
    icon: heat,
    tooltip: {
      title_toggle: false,
      title: "HEAT RESISTANCE",
      content:
        "BARRILUX is very resistant to gradual and sudden thermal changes.\n" +
        "Sagging: 0 mm at 70°C; 1 mm at 90°C; 3 mm at 110°C.",
    },
  },
  {
    label: "ENVIRONMENT",
    icon: environment,
    tooltip: {
      title_toggle: false,
      title: "ENVIRONMENT",
      content:
        "BARRILUX is environment friendly and 100% recyclable.",
    },
  },
  {
    label: "LIGHT DIFFUSION",
    icon: light,
    tooltip: {
      title_toggle: false,
      title: "LIGHT DIFFUSION",
      content:
        "BARRILUX translucent materials provide different light diffusion properties.\n" +
        "Transmission ranges from 40% to 85%.",
    },
  },
  {
    label: "BACTERIAL RESISTANCE",
    icon: bac,
    tooltip: {
      title_toggle: false,
      title: "BACTERIAL RESISTANCE",
      content:
        "BARRILUX has unique anti-bacterial properties.\n" +
        "No growth according to ASTM G 22-76.",
    },
  },
];