import React, { Component } from "react";

export default class SystemDesignImg extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="800"
        height="600"
        viewBox="0 0 800 600"
      >
        <title>System Design</title>
        {/* Background cloud shape */}
        <ellipse
          cx="400"
          cy="520"
          rx="350"
          ry="60"
          fill={theme.imageHighlight}
          opacity="0.38"
        />

        {/* Central Server */}
        <rect
          x="340"
          y="220"
          width="120"
          height="160"
          rx="12"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <rect
          x="355"
          y="240"
          width="90"
          height="16"
          rx="3"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <circle cx="430" cy="248" r="4" fill={theme.imageHighlight} />
        <rect
          x="355"
          y="266"
          width="90"
          height="16"
          rx="3"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <circle cx="430" cy="274" r="4" fill={theme.imageHighlight} />
        <rect
          x="355"
          y="292"
          width="90"
          height="16"
          rx="3"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <circle cx="430" cy="300" r="4" fill={theme.imageHighlight} />
        <rect
          x="355"
          y="318"
          width="90"
          height="16"
          rx="3"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <circle cx="430" cy="326" r="4" fill={theme.imageHighlight} />
        {/* Server label */}
        <text
          x="400"
          y="360"
          textAnchor="middle"
          fill={theme.text}
          fontSize="12"
          fontWeight="600"
          fontFamily="sans-serif"
          opacity="0.9"
        >
          Server
        </text>

        {/* Load Balancer - Top */}
        <polygon
          points="400,80 440,130 360,130"
          fill={theme.imageHighlight}
          opacity="0.75"
        />
        <text
          x="400"
          y="118"
          textAnchor="middle"
          fill={theme.text}
          fontSize="10"
          fontWeight="600"
          fontFamily="sans-serif"
          opacity="0.9"
        >
          LB
        </text>

        {/* Connection: LB to Server */}
        <line
          x1="400"
          y1="130"
          x2="400"
          y2="220"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="6,4"
          opacity="0.75"
        />

        {/* Database - Left */}
        <ellipse
          cx="140"
          cy="290"
          rx="55"
          ry="16"
          fill={theme.imageHighlight}
          opacity="0.8"
        />
        <rect
          x="85"
          y="290"
          width="110"
          height="50"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <ellipse
          cx="140"
          cy="340"
          rx="55"
          ry="16"
          fill={theme.imageHighlight}
          opacity="0.8"
        />
        <text
          x="140"
          y="322"
          textAnchor="middle"
          fill={theme.text}
          fontSize="11"
          fontWeight="600"
          fontFamily="sans-serif"
          opacity="0.9"
        >
          Database
        </text>

        {/* Connection: Server to Database */}
        <line
          x1="340"
          y1="300"
          x2="195"
          y2="300"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="6,4"
          opacity="0.75"
        />
        <polygon
          points="200,296 190,300 200,304"
          fill={theme.imageHighlight}
          opacity="0.85"
        />

        {/* Cache - Right */}
        <rect
          x="590"
          y="260"
          width="100"
          height="70"
          rx="10"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <text
          x="640"
          y="285"
          textAnchor="middle"
          fill={theme.text}
          fontSize="11"
          fontWeight="600"
          fontFamily="sans-serif"
          opacity="0.9"
        >
          Cache
        </text>
        {/* Cache icon lines */}
        <line
          x1="610"
          y1="298"
          x2="670"
          y2="298"
          stroke={theme.imageHighlight}
          strokeWidth="1.5"
          opacity="0.85"
        />
        <line
          x1="610"
          y1="308"
          x2="660"
          y2="308"
          stroke={theme.imageHighlight}
          strokeWidth="1.5"
          opacity="0.85"
        />
        <line
          x1="610"
          y1="318"
          x2="650"
          y2="318"
          stroke={theme.imageHighlight}
          strokeWidth="1.5"
          opacity="0.85"
        />

        {/* Connection: Server to Cache */}
        <line
          x1="460"
          y1="300"
          x2="590"
          y2="295"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="6,4"
          opacity="0.75"
        />
        <polygon
          points="585,291 595,295 585,299"
          fill={theme.imageHighlight}
          opacity="0.85"
        />

        {/* Message Queue - Bottom Left */}
        <rect
          x="100"
          y="430"
          width="130"
          height="55"
          rx="8"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        {/* Queue items */}
        <rect
          x="115"
          y="445"
          width="20"
          height="25"
          rx="3"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <rect
          x="140"
          y="445"
          width="20"
          height="25"
          rx="3"
          fill={theme.imageHighlight}
          opacity="0.9"
        />
        <rect
          x="165"
          y="445"
          width="20"
          height="25"
          rx="3"
          fill={theme.imageHighlight}
          opacity="0.8"
        />
        <rect
          x="190"
          y="445"
          width="20"
          height="25"
          rx="3"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <text
          x="165"
          y="484"
          textAnchor="middle"
          fill={theme.text}
          fontSize="10"
          fontWeight="600"
          fontFamily="sans-serif"
          opacity="0.9"
        >
          Message Queue
        </text>

        {/* Connection: Server to MQ */}
        <line
          x1="370"
          y1="380"
          x2="210"
          y2="440"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="6,4"
          opacity="0.75"
        />

        {/* Microservices - Bottom Right */}
        <rect
          x="530"
          y="410"
          width="75"
          height="50"
          rx="8"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <text
          x="567"
          y="440"
          textAnchor="middle"
          fill={theme.text}
          fontSize="9"
          fontWeight="500"
          fontFamily="sans-serif"
          opacity="0.9"
        >
          Service A
        </text>

        <rect
          x="625"
          y="410"
          width="75"
          height="50"
          rx="8"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <text
          x="662"
          y="440"
          textAnchor="middle"
          fill={theme.text}
          fontSize="9"
          fontWeight="500"
          fontFamily="sans-serif"
          opacity="0.9"
        >
          Service B
        </text>

        <rect
          x="580"
          y="470"
          width="75"
          height="50"
          rx="8"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <text
          x="617"
          y="500"
          textAnchor="middle"
          fill={theme.text}
          fontSize="9"
          fontWeight="500"
          fontFamily="sans-serif"
          opacity="0.9"
        >
          Service C
        </text>

        {/* Connection: Server to Microservices */}
        <line
          x1="430"
          y1="380"
          x2="555"
          y2="430"
          stroke={theme.imageHighlight}
          strokeWidth="2"
          strokeDasharray="6,4"
          opacity="0.75"
        />

        {/* Client nodes - Top */}
        <circle
          cx="270"
          cy="60"
          r="22"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <text
          x="270"
          y="64"
          textAnchor="middle"
          fill={theme.text}
          fontSize="9"
          fontFamily="sans-serif"
          opacity="0.85"
        >
          User
        </text>

        <circle
          cx="400"
          cy="30"
          r="22"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <text
          x="400"
          y="34"
          textAnchor="middle"
          fill={theme.text}
          fontSize="9"
          fontFamily="sans-serif"
          opacity="0.85"
        >
          User
        </text>

        <circle
          cx="530"
          cy="60"
          r="22"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <text
          x="530"
          y="64"
          textAnchor="middle"
          fill={theme.text}
          fontSize="9"
          fontFamily="sans-serif"
          opacity="0.85"
        >
          User
        </text>

        {/* Connections: Users to LB */}
        <line
          x1="285"
          y1="75"
          x2="375"
          y2="95"
          stroke={theme.imageHighlight}
          strokeWidth="1.5"
          strokeDasharray="4,3"
          opacity="0.85"
        />
        <line
          x1="400"
          y1="52"
          x2="400"
          y2="80"
          stroke={theme.imageHighlight}
          strokeWidth="1.5"
          strokeDasharray="4,3"
          opacity="0.85"
        />
        <line
          x1="515"
          y1="75"
          x2="425"
          y2="95"
          stroke={theme.imageHighlight}
          strokeWidth="1.5"
          strokeDasharray="4,3"
          opacity="0.85"
        />

        {/* CDN - Top Right */}
        <rect
          x="620"
          y="100"
          width="100"
          height="45"
          rx="8"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <text
          x="670"
          y="128"
          textAnchor="middle"
          fill={theme.text}
          fontSize="11"
          fontWeight="600"
          fontFamily="sans-serif"
          opacity="0.9"
        >
          CDN
        </text>

        {/* Connection: LB to CDN */}
        <line
          x1="440"
          y1="105"
          x2="620"
          y2="120"
          stroke={theme.imageHighlight}
          strokeWidth="1.5"
          strokeDasharray="5,3"
          opacity="0.85"
        />

        {/* API Gateway - Top Left */}
        <rect
          x="80"
          y="120"
          width="110"
          height="45"
          rx="8"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <text
          x="135"
          y="148"
          textAnchor="middle"
          fill={theme.text}
          fontSize="11"
          fontWeight="600"
          fontFamily="sans-serif"
          opacity="0.9"
        >
          API Gateway
        </text>

        {/* Connection: LB to API Gateway */}
        <line
          x1="360"
          y1="105"
          x2="190"
          y2="138"
          stroke={theme.imageHighlight}
          strokeWidth="1.5"
          strokeDasharray="5,3"
          opacity="0.85"
        />

        {/* Decorative dots */}
        <circle
          cx="310"
          cy="450"
          r="3"
          fill={theme.imageHighlight}
          opacity="0.8"
        />
        <circle
          cx="330"
          cy="470"
          r="2"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
        <circle
          cx="450"
          cy="460"
          r="3"
          fill={theme.imageHighlight}
          opacity="0.75"
        />
        <circle
          cx="480"
          cy="480"
          r="2"
          fill={theme.imageHighlight}
          opacity="0.85"
        />
      </svg>
    );
  }
}
