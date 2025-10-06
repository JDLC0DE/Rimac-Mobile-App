import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from "react-native-svg";

export default function HouseIcon(props: SvgProps) {
  return (
    <Svg width={56} height={56} viewBox="0 0 56 56" fill="none" {...props}>
      <Path
        d="M54.25 35a7 7 0 10-8.75 6.781V52.5H49V41.781A7 7 0 0054.25 35z"
        fill="url(#paint0_linear_12_165128)"
      />
      <Path
        d="M42.875 49H35v-7a7 7 0 10-14 0v7H9.625V20.344h-.12l16.977-12a2.625 2.625 0 013.027 0l16.866 11.901v5.172a9.552 9.552 0 013.5.326v-3.028l4.375 3.098v-4.294L31.528 5.482a6.14 6.14 0 00-7.067 0L1.75 21.538v4.288l4.375-3.093V49a3.5 3.5 0 003.5 3.5h33.25V49zM31.5 49h-7v-7a3.5 3.5 0 117 0v7z"
        fill="url(#paint1_linear_12_165128)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_12_165128"
          x1={40.6163}
          y1={29.9261}
          x2={58.0062}
          y2={39.8646}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.35} stopColor="#F7052D" />
          <Stop offset={0.85} stopColor="#CA5AFA" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_12_165128"
          x1={1.75}
          y1={4.36304}
          x2={26.0494}
          y2={63.992}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.272135} stopColor="#34263B" />
          <Stop offset={0.658079} stopColor="#13172C" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
