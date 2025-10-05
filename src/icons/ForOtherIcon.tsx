import Svg, {
  Defs,
  LinearGradient,
  Path,
  Stop,
  SvgProps,
} from "react-native-svg";

export default function ForOtherIcon(props: SvgProps) {
  return (
    <Svg width={32} height={32} viewBox="0 0 32 32" fill="none" {...props}>
      <Path
        d="M28.819 7.216L16.956 1.285a2.153 2.153 0 00-1.912 0L3.18 7.216a2.145 2.145 0 00-1.14 2.332l1.661 8.303a13.991 13.991 0 005.423 8.524l5.61 4.144a2.125 2.125 0 002.54 0l.709-.524c-.472-.473-.886-1-1.234-1.57l-.663.489a.135.135 0 01-.162 0l-5.61-4.144c-.45-.332-.876-.695-1.276-1.086a7.067 7.067 0 013.553-5.027L14 17.875a5.001 5.001 0 007-4.584V11.71a5 5 0 00-10 0v1.582c0 1.206.436 2.371 1.23 3.279l-.605.336a9.067 9.067 0 00-4.154 4.887A12 12 0 015.67 17.46l-1.67-8.305a.14.14 0 01.075-.15l11.862-5.931a.144.144 0 01.125 0L27.924 9a.14.14 0 01.073.15l-1.353 6.765a8.402 8.402 0 011.865.875l1.45-7.25a2.146 2.146 0 00-1.14-2.324zm-15.82 4.493a3 3 0 016 0v1.582a3 3 0 11-6 0V11.71z"
        fill="url(#paint0_linear_12_156245)"
      />
      <Path
        d="M28.95 19.05a7 7 0 10-9.899 9.9 7 7 0 009.899-9.9zM28 25h-3v3h-2v-3h-3v-2h3v-3h2v3h3v2z"
        fill="url(#paint1_linear_12_156245)"
      />
      <Defs>
        <LinearGradient
          id="paint0_linear_12_156245"
          x1={2.00049}
          y1={1.06094}
          x2={18.7117}
          y2={36.2932}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.272135} stopColor="#34263B" />
          <Stop offset={0.658079} stopColor="#13172C" />
        </LinearGradient>
        <LinearGradient
          id="paint1_linear_12_156245"
          x1={17.3667}
          y1={18.0988}
          x2={28.9017}
          y2={29.6338}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.35} stopColor="#F7052D" />
          <Stop offset={0.85} stopColor="#CA5AFA" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
}
