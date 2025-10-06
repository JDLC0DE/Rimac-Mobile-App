import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from "react-native-svg";

export default function HospitalIcon(props: SvgProps) {
  return (
    <Svg width={56} height={56} viewBox="0 0 56 56" fill="none" {...props}>
      <Path
        d="M28 16.017h-7.267V8.75h-5.591v7.267H7.875v5.591h7.267v7.267h5.591v-7.267H28v-5.591z"
        fill="url(#paint0_linear_12_156455)"
      />
      <Path
        d="M48.983 18.025L38.5 12.055v-4.18a6.132 6.132 0 00-6.125-6.125h-21A6.132 6.132 0 005.25 7.875v5.517h3.5V7.875a2.627 2.627 0 012.625-2.625h21A2.627 2.627 0 0135 7.875V50.75h-7v-10.5H15.75v10.5h-7V24.233h-3.5V50.75c0 1.93 1.57 3.5 3.5 3.5h38.5c1.934 0 3.5-1.566 3.5-3.5V21.066a3.5 3.5 0 00-1.767-3.041zM24.5 50.75h-5.25v-7h5.25v7zm22.75 0H38.5v-14h5.25v-3.5H38.5v-3.5h5.25v-3.5H38.5V16.082l8.75 4.984V50.75z"
        fill="url(#paint1_linear_12_156455)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_12_156455"
          x1={8.40148}
          y1={10.3295}
          x2={24.983}
          y2={26.911}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.35} stopColor="#F7052D" />
          <Stop offset={0.85} stopColor="#CA5AFA" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_12_156455"
          x1={5.25}
          y1={1.75}
          x2={36.0413}
          y2={61.7929}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.272135} stopColor="#34263B" />
          <Stop offset={0.658079} stopColor="#13172C" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
