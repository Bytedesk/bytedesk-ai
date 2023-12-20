(function (doc) {
    var id = '__CHATUI_ICONS__';
    var svgSprite =
        '<svg xmlns="http://www.w3.org/2000/svg" id="' +
        id +
        '" style="display:none"><symbol id="icon-alarm" viewBox="0 0 32 32"><path d="M16 26c5.523 0 10-4.477 10-10S21.523 6 16 6 6 10.477 6 16s4.477 10 10 10Zm6.17.294A11.944 11.944 0 0 1 16 28c-2.223 0-4.304-.604-6.09-1.657l-1.012 1.753a1 1 0 0 1-1.732-1l1.106-1.915A11.974 11.974 0 0 1 4 16C4 9.373 9.373 4 16 4s12 5.373 12 12c0 3.65-1.629 6.918-4.2 9.119l1.066 1.845a1 1 0 0 1-1.732 1l-.964-1.67ZM5.052 8.353a1 1 0 0 1-1.414-1.415l3.3-3.3a1 1 0 0 1 1.414 1.415l-3.3 3.3Zm23.323-1.41a1 1 0 1 1-1.415 1.414l-3.3-3.3a1 1 0 0 1 1.415-1.414l3.3 3.3ZM16.667 16V9.667a1 1 0 0 0-2 0V17a1 1 0 0 0 1 1h6a1 1 0 0 0 0-2h-5Z"/></symbol><symbol id="icon-apps" viewBox="0 0 48 48"><path d="M17.744 3.92H8.26a4.5 4.5 0 0 0-4.5 4.5v9.484a4.5 4.5 0 0 0 4.5 4.5h9.484a4.5 4.5 0 0 0 4.5-4.5V8.42a4.5 4.5 0 0 0-4.5-4.5Zm-9.484 3h9.484a1.5 1.5 0 0 1 1.5 1.5v9.484a1.5 1.5 0 0 1-1.5 1.5H8.26a1.5 1.5 0 0 1-1.5-1.5V8.42a1.5 1.5 0 0 1 1.5-1.5Zm9.484 18.677H8.26a4.5 4.5 0 0 0-4.5 4.5v9.484a4.5 4.5 0 0 0 4.5 4.5h9.484a4.5 4.5 0 0 0 4.5-4.5v-9.484a4.5 4.5 0 0 0-4.5-4.5Zm-9.484 3h9.484a1.5 1.5 0 0 1 1.5 1.5v9.484a1.5 1.5 0 0 1-1.5 1.5H8.26a1.5 1.5 0 0 1-1.5-1.5v-9.484a1.5 1.5 0 0 1 1.5-1.5Zm31.484-3H30.26a4.5 4.5 0 0 0-4.5 4.5v9.484a4.5 4.5 0 0 0 4.5 4.5h9.484a4.5 4.5 0 0 0 4.5-4.5v-9.484a4.5 4.5 0 0 0-4.5-4.5Zm-9.484 3h9.484a1.5 1.5 0 0 1 1.5 1.5v9.484a1.5 1.5 0 0 1-1.5 1.5H30.26a1.5 1.5 0 0 1-1.5-1.5v-9.484a1.5 1.5 0 0 1 1.5-1.5ZM39.421 3.92h-9.484a4.5 4.5 0 0 0-4.5 4.5v9.484a4.5 4.5 0 0 0 4.5 4.5h9.484a4.5 4.5 0 0 0 4.5-4.5V8.42a4.5 4.5 0 0 0-4.5-4.5Zm-9.484 3h9.484a1.5 1.5 0 0 1 1.5 1.5v9.484a1.5 1.5 0 0 1-1.5 1.5h-9.484a1.5 1.5 0 0 1-1.5-1.5V8.42a1.5 1.5 0 0 1 1.5-1.5Z"/></symbol><symbol id="icon-bullhorn" viewBox="0 0 48 48"><path d="M21.716 7.506c-.968.056-2.28.637-3.15 1.351l-6.947 5.485H7.944c-2.724 0-4.756 1.989-5.148 4.7-.37 2.881-.399 7.582-.052 10.406l.088.636c.441 2.764 2.387 4.576 5.112 4.576l3.676-.001 7.126 5.607c.837.682 2.012 1.182 3.02 1.23l.23.002c2.085.061 3.982-1.43 4.675-3.67.158-.567.255-1.062.34-1.696l.07-.582.129-1.21.036-.301.03-.294.027-.344.026-.392.036-.674.032-.77.036-1.163.04-1.995.022-2.24.005-1.194-.005-2.136-.013-1.518-.027-1.756-.022-.963-.057-1.687-.047-.922-.026-.393-.028-.345-.175-1.568-.072-.61c-.095-.757-.193-1.299-.342-1.851l-.015-.053c-.693-2.239-2.591-3.73-4.753-3.67l-.202.005Zm.368 2.998c.715.046 1.341.542 1.658 1.371l.055.159.032.124.072.324c.033.17.065.353.095.56l.06.449.225 1.957.025.291.035.532.043.876.036 1.045.037 1.513.033 2.428.01 1.9-.007 2.467-.03 2.471-.043 1.839-.046 1.28-.044.828-.036.494-.026.263-.072.623-.094.896-.059.491c-.04.301-.08.553-.128.788l-.078.343c-.014.057-.03.113-.045.17-.297.959-1.03 1.535-1.79 1.513-.353.007-.977-.246-1.381-.575l-7.553-5.943a1.5 1.5 0 0 0-.928-.321H7.944c-1.229 0-1.988-.737-2.175-2.224-.364-2.51-.352-7.253 0-9.989.185-1.282 1.025-2.105 2.175-2.105h4.196a1.5 1.5 0 0 0 .93-.322l7.378-5.826c.444-.365 1.228-.698 1.481-.693l.155.003Zm9.069 2.258a1.5 1.5 0 0 1 2.085.39c2.1 3.068 3.262 7.062 3.262 11.349 0 4.286-1.162 8.279-3.262 11.346a1.5 1.5 0 0 1-2.476-1.694C32.51 31.6 33.5 28.199 33.5 24.5c0-3.698-.99-7.101-2.738-9.654a1.5 1.5 0 0 1 .39-2.085Zm6.93-4.949a1.5 1.5 0 0 1 2.104.27C43.6 12.498 45.5 18.282 45.5 24.502c0 6.219-1.9 12-5.313 16.415a1.5 1.5 0 0 1-2.374-1.834c3-3.881 4.687-9.015 4.687-14.581 0-5.568-1.688-10.705-4.687-14.585a1.5 1.5 0 0 1 .27-2.104Z"/></symbol><symbol id="icon-camera" viewBox="0 0 48 48"><path d="M28.363 5.5a4.233 4.233 0 0 1 1.88.442l.01.004a4.222 4.222 0 0 1 1.923 1.97l1.084 2.3.067.123c.219.352.609.572 1.033.572h3.458l.235.004c3.58.123 6.447 3.058 6.447 6.661v17.21l-.004.26C44.357 39.74 40.5 43.5 35.762 43.5H12.238c-4.737 0-8.595-3.76-8.734-8.453l-.004-.262V17.576c0-3.603 2.867-6.538 6.447-6.66l.235-.005h3.458l.14-.008c.415-.048.78-.305.96-.687l1.084-2.3.095-.19a4.2 4.2 0 0 1 1.829-1.78l.009-.004a4.221 4.221 0 0 1 1.88-.442h8.726Zm0 3h-8.726l-.14.008c-.415.048-.78.306-.96.687l-1.084 2.3-.095.19c-.07.13-.145.255-.227.376l-.005.008a4.198 4.198 0 0 1-2.203 1.643 4.21 4.21 0 0 1-1.283.2h-3.458a3.675 3.675 0 0 0-3.677 3.47l-.005.194v17.21c0 3.08 2.45 5.595 5.518 5.71l.22.004h23.524l.22-.004c3.068-.115 5.518-2.63 5.518-5.71v-17.21l-.005-.194a3.675 3.675 0 0 0-3.677-3.47H34.36a4.234 4.234 0 0 1-1.952-.48 4.22 4.22 0 0 1-1.534-1.363l-.005-.008a4.203 4.203 0 0 1-.227-.376l-.095-.19-1.084-2.3a1.214 1.214 0 0 0-.96-.687l-.14-.008ZM24 17.5a8.5 8.5 0 1 1 0 17 8.5 8.5 0 0 1 0-17Zm0 3a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Z"/></symbol><symbol id="icon-cancel" viewBox="0 0 48 48"><path d="M36.346 10.124c7.616 5.95 8.966 16.948 3.016 24.564-5.95 7.616-16.948 8.966-24.565 3.016a1.5 1.5 0 0 1 1.847-2.364c6.311 4.93 15.423 3.811 20.354-2.5 4.93-6.31 3.811-15.422-2.5-20.352-6.31-4.93-15.422-3.812-20.353 2.499a14.428 14.428 0 0 0-3.074 8.812c0 .161-.014.31-.048.467-.09.41-.279.773-.75 1.046-.652.378-1.29.223-1.745-.139a1.842 1.842 0 0 1-.396-.438 4.224 4.224 0 0 1-.29-.523l-.159-.353a18.186 18.186 0 0 1-.175-.422l-.167-.424-.318-.853-.467-1.318-.317-.925-.345-1.025-.503-1.525-.27-.83a1.5 1.5 0 0 1 2.855-.924l.6 1.833.35 1.053.04-.121a17.47 17.47 0 0 1 2.552-4.893l.263-.345c5.95-7.616 16.949-8.967 24.565-3.016Z"/></symbol><symbol id="icon-cart" viewBox="0 0 48 48"><path d="M4.522 6.745a1.5 1.5 0 0 1 1.59-1.24l.143.017 3.619.625a1.5 1.5 0 0 1 1.215 1.184l.021.14.416 4.045h27.141a3.831 3.831 0 0 1 3.815 4.195l-.023.193-2.455 16.21a4.637 4.637 0 0 1-4.375 3.965l-.215.004h-20.19c-2.338 0-4.297-1.734-4.594-4.003L8.242 8.91l-2.497-.432a1.5 1.5 0 0 1-1.24-1.59l.017-.143Zm9.071 24.842c.067.796.698 1.42 1.483 1.49l.149.006h20.19c.765 0 1.421-.528 1.595-1.269l.026-.14 2.455-16.21a.83.83 0 0 0-.717-.941l-.107-.007H11.835l1.758 17.07Zm.682 11.368c1.422 0 2.574-1.133 2.574-2.53 0-1.398-1.152-2.53-2.574-2.53-1.42 0-2.573 1.132-2.573 2.53 0 1.397 1.152 2.53 2.573 2.53Zm21.476.017c1.421 0 2.574-1.136 2.574-2.539 0-1.402-1.153-2.538-2.574-2.538-1.421 0-2.573 1.136-2.573 2.538 0 1.403 1.152 2.54 2.573 2.54Z"/></symbol><symbol id="icon-check-circle-fill" viewBox="0 0 48 48"><path d="M23.871 2.371c11.874 0 21.5 9.626 21.5 21.5s-9.626 21.5-21.5 21.5-21.5-9.626-21.5-21.5 9.626-21.5 21.5-21.5Zm9.102 15.43a1.5 1.5 0 0 0-2.121.018l-8.547 8.683-5.365-5.451-.113-.104a1.5 1.5 0 0 0-2.025 2.208l6.434 6.538.115.105a1.5 1.5 0 0 0 2.023-.105l9.616-9.77.102-.115a1.5 1.5 0 0 0-.119-2.006Z"/></symbol><symbol id="icon-check-circle" viewBox="0 0 48 48"><path d="M23.871 2.371c11.874 0 21.5 9.626 21.5 21.5s-9.626 21.5-21.5 21.5-21.5-9.626-21.5-21.5 9.626-21.5 21.5-21.5Zm0 3c-10.217 0-18.5 8.283-18.5 18.5s8.283 18.5 18.5 18.5 18.5-8.283 18.5-18.5-8.283-18.5-18.5-18.5Zm9.102 12.43a1.5 1.5 0 0 1 .12 2.007l-.103.115-9.616 9.77a1.5 1.5 0 0 1-2.023.105l-.115-.105-6.434-6.538a1.5 1.5 0 0 1 2.025-2.208l.113.104 5.365 5.451 8.547-8.683a1.5 1.5 0 0 1 2.121-.017Z"/></symbol><symbol id="icon-check" viewBox="0 0 48 48"><path d="M39.288 12.948a1.5 1.5 0 0 1 2.24 1.99l-.102.114L22.94 33.834a2.5 2.5 0 0 1-3.405.095l-.13-.123-12.116-12.31a1.5 1.5 0 0 1 2.025-2.208l.113.104L21.185 31.34l18.103-18.391Z"/></symbol><symbol id="icon-chevron-double-down" viewBox="0 0 48 48"><path d="m24.924 24.994 15.29-11.968a.744.744 0 0 0 .286-.59V8.812a.374.374 0 0 0-.604-.295L24 20.957 8.105 8.518a.374.374 0 0 0-.605.295v3.624c0 .23.108.45.286.59l15.286 11.968a1.5 1.5 0 0 0 1.852 0Zm0 14.25 15.29-11.968a.744.744 0 0 0 .286-.59v-3.624a.374.374 0 0 0-.604-.295L24 35.207 8.105 22.768a.374.374 0 0 0-.605.295v3.624c0 .23.108.45.286.59l15.286 11.968a1.5 1.5 0 0 0 1.852 0Z"/></symbol><symbol id="icon-chevron-down" viewBox="0 0 48 48"><path d="M22.219 33.17 8.159 17.89a1.5 1.5 0 0 1 2.105-2.133l.103.101 13.649 14.836 13.649-14.836a1.5 1.5 0 0 1 2.008-.18l.111.092a1.5 1.5 0 0 1 .181 2.009l-.093.11-14.016 15.236a2.5 2.5 0 0 1-3.408.254l-.17-.15-.06-.06Z"/></symbol><symbol id="icon-chevron-left" viewBox="0 0 48 48"><path d="m12.892 22.619 15.28-14.06a1.5 1.5 0 0 1 2.133 2.106l-.101.103-14.836 13.648 14.836 13.649a1.5 1.5 0 0 1 .18 2.008l-.092.111a1.5 1.5 0 0 1-2.009.181l-.11-.092-15.236-14.017a2.5 2.5 0 0 1-.255-3.408l.15-.17.06-.06Z"/></symbol><symbol id="icon-chevron-right" viewBox="0 0 48 48"><path d="m35.108 22.619-15.28-14.06a1.5 1.5 0 0 0-2.133 2.106l.101.103 14.836 13.648-14.836 13.649a1.5 1.5 0 0 0-.18 2.008l.092.111a1.5 1.5 0 0 0 2.009.181l.11-.092 15.236-14.017a2.5 2.5 0 0 0 .255-3.408l-.15-.17-.06-.06Z"/></symbol><symbol id="icon-chevron-up" viewBox="0 0 48 48"><path d="m22.219 14.889-14.06 15.28a1.5 1.5 0 0 0 2.105 2.133l.103-.102 13.649-14.836L37.665 32.2a1.5 1.5 0 0 0 2.008.181l.111-.093a1.5 1.5 0 0 0 .181-2.008l-.093-.111-14.016-15.236a2.5 2.5 0 0 0-3.408-.254l-.17.15-.06.06Z"/></symbol><symbol id="icon-close-circle" viewBox="0 0 48 48"><path d="M8.797 8.797c8.396-8.396 22.01-8.396 30.406 0 8.396 8.396 8.396 22.01 0 30.406-8.396 8.396-22.01 8.396-30.406 0-8.396-8.396-8.396-22.01 0-30.406Zm28.284 2.122c-7.224-7.225-18.938-7.225-26.162 0-7.225 7.224-7.225 18.938 0 26.162 7.224 7.225 18.938 7.225 26.162 0 7.225-7.224 7.225-18.938 0-26.162ZM19.267 17.19l.106.098 4.635 4.655 4.652-4.63a1.5 1.5 0 0 1 2.214 2.019l-.097.107-4.653 4.63 4.57 4.59a1.5 1.5 0 0 1-2.02 2.215l-.106-.098-4.571-4.59-4.592 4.573a1.5 1.5 0 0 1-2.214-2.02l.097-.106 4.593-4.573-4.634-4.656a1.5 1.5 0 0 1 2.02-2.214Z"/></symbol><symbol id="icon-close" viewBox="0 0 48 48"><path d="M36.053 9.836a1.5 1.5 0 0 1 2.008 2.225L26.12 24l11.94 11.94a1.5 1.5 0 0 1-2.008 2.224l-.114-.103L24 26.12l-11.94 11.94-.113.103a1.5 1.5 0 0 1-2.008-2.225L21.88 24 9.939 12.06a1.5 1.5 0 0 1 2.008-2.224l.114.103L24 21.88l11.94-11.94Z"/></symbol><symbol id="icon-compass" viewBox="0 0 48 48"><path d="M43.856 6.078c.33.8.355 1.691.076 2.505l-.076.202-9.991 24.264-.015.034-.029.062.044-.096a1.515 1.515 0 0 1-.529.66 1.391 1.391 0 0 1-.156.095l-.035.017-.062.03-.034.014-24.264 9.99a3.555 3.555 0 0 1-4.717-4.438l.076-.202 9.991-24.264.013-.03c.012-.027.024-.054.038-.08l-.051.11a1.517 1.517 0 0 1 .47-.616 1.606 1.606 0 0 1 .215-.139l.02-.01c.027-.014.054-.026.08-.038l.03-.013 24.265-9.99a3.555 3.555 0 0 1 4.64 1.933Zm-3.413.813-.086.027L16.67 16.67 6.918 40.357a.555.555 0 0 0 .64.752l.085-.027 23.685-9.754 9.754-23.685a.555.555 0 0 0-.64-.752ZM24 17.2a6.8 6.8 0 1 1 0 13.6 6.8 6.8 0 0 1 0-13.6Zm0 3a3.8 3.8 0 1 0 0 7.6 3.8 3.8 0 0 0 0-7.6Z"/></symbol><symbol id="icon-copy" viewBox="0 0 48 48"><path d="M10.372 14.5a1.5 1.5 0 0 1 .145 2.993l-.145.007a.873.873 0 0 0-.865.763l-.007.11V36a2.5 2.5 0 0 0 2.336 2.495L12 38.5h17.618c.45 0 .82-.336.875-.771l.007-.11a1.5 1.5 0 0 1 3 0 3.882 3.882 0 0 1-3.682 3.876l-.2.005H12a5.5 5.5 0 0 1-5.496-5.279L6.5 36V18.372a3.872 3.872 0 0 1 3.872-3.872ZM36 6.5a5.5 5.5 0 0 1 5.5 5.5v17a5.5 5.5 0 0 1-5.5 5.5H19a5.5 5.5 0 0 1-5.5-5.5V12A5.5 5.5 0 0 1 19 6.5Zm0 3H19a2.5 2.5 0 0 0-2.5 2.5v17a2.5 2.5 0 0 0 2.5 2.5h17a2.5 2.5 0 0 0 2.5-2.5V12A2.5 2.5 0 0 0 36 9.5Z"/></symbol><symbol id="icon-dash-circle-fill" viewBox="0 0 44 44"><path d="M22 .5C33.874.5 43.5 10.126 43.5 22S33.874 43.5 22 43.5.5 33.874.5 22 10.126.5 22 .5Zm-8.022 19.96-.144.007a1.5 1.5 0 0 0 .138 2.993l16.045.037.145-.007a1.5 1.5 0 0 0-.138-2.993l-16.046-.037Z"/></symbol><symbol id="icon-ellipsis-h" viewBox="0 0 48 48"><path d="M10.83 27a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm13.166 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm13.165 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" fill="currentColor" fill-rule="evenodd"/></symbol><symbol id="icon-file" viewBox="0 0 48 48"><path d="M30.942 4.5c.439 0 .87.058 1.286.168h.768v.273a4.999 4.999 0 0 1 1.669 1.221l5.558 6.198a5 5 0 0 1 1.277 3.338V37.5a6 6 0 0 1-6 6h-23a6 6 0 0 1-6-6v-27a6 6 0 0 1 6-6Zm-.947 3H12.5a3 3 0 0 0-3 3v27a3 3 0 0 0 3 3h23a3 3 0 0 0 3-3V19.022h-4.004a4.5 4.5 0 0 1-4.495-4.288l-.005-.211-.001-7.023Zm7.994 6.863-4.994-5.57.001 5.73a1.5 1.5 0 0 0 1.356 1.493l.144.007 4.004-.001v-.324a2 2 0 0 0-.395-1.193l-.116-.142Z"/></symbol><symbol id="icon-folder" viewBox="0 0 48 48"><path d="M19.11 4.5a5.5 5.5 0 0 1 4.477 2.306l.136.2.054.083a2.5 2.5 0 0 0 1.917 1.133l.18.006h8.154A6.172 6.172 0 0 1 40.2 14.4c0 .125-.015.247-.044.363a9.5 9.5 0 0 1 3.51 10.154l-3.508 12.77a7.5 7.5 0 0 1-7.232 5.513H15.074a7.5 7.5 0 0 1-7.232-5.513l-3.508-12.77C3.15 20.609 5.13 16.18 8.867 14.1a.606.606 0 0 1-.01-.072l-.007-.145V11a6.5 6.5 0 0 1 6.267-6.496l.233-.004h3.76Zm15.396 11.4H13.494a6.5 6.5 0 0 0-6.268 8.222l3.509 12.77a4.5 4.5 0 0 0 4.339 3.308h17.852a4.5 4.5 0 0 0 4.34-3.308l3.508-12.77a6.5 6.5 0 0 0-6.268-8.222Zm-5.256 5.925a1.5 1.5 0 0 1 .144 2.993l-.144.007h-10.5a1.5 1.5 0 0 1-.144-2.993l.144-.007h10.5ZM19.11 7.5h-3.76a3.5 3.5 0 0 0-3.495 3.308L11.85 11v2.043a9.5 9.5 0 0 1 1.644-.143h21.012c.854 0 1.682.113 2.47.324a3.175 3.175 0 0 0-2.768-1.99l-.18-.006h-8.154a5.5 5.5 0 0 1-4.478-2.306l-.19-.283a2.5 2.5 0 0 0-1.916-1.132l-.18-.007Z"/></symbol><symbol id="icon-hexagon" viewBox="0 0 134 142"><path d="M87.123 5.015c5.38 2.858 9.838 5.32 13.377 7.383 3.612 2.106 8.058 4.843 13.338 8.212a42.875 42.875 0 0 1 19.783 34.447C133.874 61.436 134 66.75 134 71s-.126 9.564-.38 15.943a42.875 42.875 0 0 1-19.782 34.447c-5.28 3.369-9.726 6.106-13.338 8.212-3.539 2.064-7.998 4.525-13.377 7.383a42.884 42.884 0 0 1-40.246 0c-5.38-2.858-9.838-5.32-13.377-7.383-3.612-2.106-8.058-4.843-13.338-8.212A42.875 42.875 0 0 1 .379 86.943C.126 80.564 0 75.25 0 71s.126-9.564.38-15.943A42.875 42.875 0 0 1 20.161 20.61c5.28-3.369 9.726-6.106 13.338-8.212 3.539-2.064 7.998-4.525 13.377-7.383a42.884 42.884 0 0 1 40.246 0Z" fill="currentColor" fill-rule="evenodd"/></symbol><symbol id="icon-home" viewBox="0 0 32 32"><path d="M6.889 13.535v13.532c0 .515.418.933.933.933h3.215v-4.654a2.733 2.733 0 0 1 2.733-2.733h4.46a2.733 2.733 0 0 1 2.733 2.733V28h3.215a.933.933 0 0 0 .933-.933V13.535L16 4.448l-9.111 9.087Zm-2 1.994-1.146 1.143a1 1 0 0 1-1.412-1.416L15.294 2.328a1 1 0 0 1 1.412 0L29.67 15.256a1 1 0 0 1-1.412 1.416l-1.146-1.143v11.538A2.933 2.933 0 0 1 24.178 30h-4.482a.733.733 0 0 1-.733-.733v-5.921a.733.733 0 0 0-.733-.733h-4.46a.733.733 0 0 0-.733.733v5.92a.733.733 0 0 1-.733.734H7.822a2.933 2.933 0 0 1-2.933-2.933V15.529Z"/></symbol><symbol id="icon-image" viewBox="0 0 48 48"><path d="M37 6.5a7.5 7.5 0 0 1 7.5 7.5v21a7.5 7.5 0 0 1-7.5 7.5H11A7.5 7.5 0 0 1 3.5 35V14A7.5 7.5 0 0 1 11 6.5Zm0 3H11A4.5 4.5 0 0 0 6.5 14v21a4.5 4.5 0 0 0 4.5 4.5h26a4.5 4.5 0 0 0 4.5-4.5V14A4.5 4.5 0 0 0 37 9.5Zm2.493 13.358a1.5 1.5 0 0 1-1.351 1.635c-2.463.234-4.205.896-5.268 1.928-.249.241-.46.526-.696.946l-.183.34-.198.4-.258.55-.252.523-.25.483c-1.083 2.009-2.188 2.909-4.358 3.05-1.272.084-2.44-.05-4.01-.396l-1.97-.464-.614-.137-.284-.06-.528-.1c-1.007-.179-1.747-.218-2.6-.15-1.896.152-3.693 1.547-5.387 4.367a1.5 1.5 0 1 1-2.572-1.546c2.148-3.574 4.72-5.571 7.719-5.811 1.393-.112 2.497-.012 4.176.344l.704.156 1.633.388c1.516.352 2.515.483 3.536.416.944-.062 1.377-.41 2.039-1.713l.196-.4.257-.549c.62-1.322 1.072-2.072 1.81-2.79 1.615-1.567 3.987-2.468 7.074-2.761a1.5 1.5 0 0 1 1.635 1.351ZM14.5 13a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3Z"/></symbol><symbol id="icon-info-circle" viewBox="0 0 48 48"><path d="M23.871 2.371c11.874 0 21.5 9.626 21.5 21.5s-9.626 21.5-21.5 21.5-21.5-9.626-21.5-21.5 9.626-21.5 21.5-21.5Zm0 3c-10.217 0-18.5 8.283-18.5 18.5s8.283 18.5 18.5 18.5 18.5-8.283 18.5-18.5-8.283-18.5-18.5-18.5Zm-.01 15.466a1.5 1.5 0 0 1 1.489 1.36l.006.144-.031 11.613-.007.144a1.5 1.5 0 0 1-2.987-.008l-.006-.144.031-11.613.007-.144a1.5 1.5 0 0 1 1.497-1.352Zm-.036-7.537a2.325 2.325 0 1 1 0 4.65 2.325 2.325 0 0 1 0-4.65Z"/></symbol><symbol id="icon-keyboard-circle" viewBox="0 0 48 48"><path d="M24 2.5c11.874 0 21.5 9.626 21.5 21.5S35.874 45.5 24 45.5 2.5 35.874 2.5 24 12.126 2.5 24 2.5Zm0 3C13.783 5.5 5.5 13.783 5.5 24S13.783 42.5 24 42.5 42.5 34.217 42.5 24 34.217 5.5 24 5.5Zm10.887 23.187a1.5 1.5 0 1 1 0 3H13.113a1.5 1.5 0 0 1 0-3h21.774Zm-.028-12.339a1.5 1.5 0 0 1 1.493 1.356l.007.144v6.194a1.5 1.5 0 0 1-1.356 1.493l-.144.007H20.95a1.5 1.5 0 0 1-.144-2.993l.144-.007 12.407-.001v-4.693a1.5 1.5 0 0 1 1.356-1.493l.145-.007Zm-20.1 6.146a1.5 1.5 0 0 1 0 3h-1.646a1.5 1.5 0 0 1 0-3h1.645Zm0-6.194a1.5 1.5 0 0 1 0 3h-1.646a1.5 1.5 0 0 1 0-3h1.645Zm13.997 0a1.5 1.5 0 0 1 0 3h-7.901a1.5 1.5 0 0 1 0-3h7.9Z"/></symbol><symbol id="icon-message" viewBox="0 0 48 48"><path d="M24.04 2.5c11.956 0 21.46 9.745 21.46 21.47 0 12.41-9.903 21.53-21.5 21.53-3.654 0-7.533-1.003-10.622-2.824l-.343-.204c-.736-.425-1.037-.487-1.428-.36L7.59 43.307c-2.156.677-4.153-1.164-3.527-3.42l1.394-4.666a.622.622 0 0 0-.075-.48C3.514 31.3 2.5 27.594 2.5 24.03 2.5 12.297 11.944 2.5 24.04 2.5Zm0 3C13.626 5.5 5.5 13.93 5.5 24.03c0 3.045.88 6.263 2.48 9.21.56.917.643 2.044.297 3.017L7.06 40.333l3.885-1.154c1.293-.36 2.284-.075 3.72.77l.257.155C17.516 41.633 20.87 42.5 24 42.5c9.993 0 18.5-7.835 18.5-18.53 0-10.085-8.178-18.47-18.46-18.47Zm.123 16.306a2.323 2.323 0 1 1 0 4.646 2.323 2.323 0 0 1 0-4.646Zm9.29 0a2.323 2.323 0 1 1 0 4.646 2.323 2.323 0 0 1 0-4.646Zm-18.58 0a2.323 2.323 0 1 1 0 4.646 2.323 2.323 0 0 1 0-4.646Z"/></symbol><symbol id="icon-mic" viewBox="0 0 48 48"><path d="M39 17.25a1.5 1.5 0 0 1 1.493 1.356l.007.144v2.85c0 8.625-6.617 15.704-15.052 16.437V43.5a1.5 1.5 0 0 1-3 0v-5.472c-8.28-.772-14.784-7.663-14.945-16.107L7.5 21.6v-2.85a1.5 1.5 0 0 1 2.993-.144l.007.144v2.85c0 7.456 6.044 13.5 13.5 13.5 7.352 0 13.332-5.877 13.497-13.19l.003-.31v-2.85a1.5 1.5 0 0 1 1.5-1.5ZM24 3a8.793 8.793 0 0 1 8.793 8.793v8.664a8.793 8.793 0 0 1-17.586 0v-8.664A8.793 8.793 0 0 1 24 3Z"/></symbol><symbol id="icon-minus" viewBox="0 0 20 20"><path d="M17.107 10c0 .324-.246.59-.561.622l-.064.003H3.518a.625.625 0 0 1-.064-1.247l.064-.003h12.964c.345 0 .625.28.625.625Z"/></symbol><symbol id="icon-play-circle" viewBox="0 0 48 48"><g stroke="currentColor" transform="translate(2.323 2.18)" fill="none" fill-rule="evenodd"><circle stroke-width="3" cx="21.677" cy="21.677" r="20.177"/><path d="M17.929 15.78a1.744 1.744 0 0 1 2.19-.23l6.904 4.483a1.744 1.744 0 0 1 0 2.935L20.12 27.45a1.744 1.744 0 0 1-1.317.244 1.744 1.744 0 0 1-1.385-1.711v-8.968c0-.483.195-.92.512-1.237Z" stroke-width="3.12"/></g></symbol><symbol id="icon-plus-circle" viewBox="0 0 48 48"><path d="M24 2.5c11.874 0 21.5 9.626 21.5 21.5S35.874 45.5 24 45.5 2.5 35.874 2.5 24 12.126 2.5 24 2.5Zm0 3C13.783 5.5 5.5 13.783 5.5 24S13.783 42.5 24 42.5 42.5 34.217 42.5 24 34.217 5.5 24 5.5Zm.198 8.979a1.5 1.5 0 0 1 1.49 1.359l.007.144-.016 6.5 6.345.015a1.5 1.5 0 0 1 .138 2.993l-.145.007-6.345-.015-.014 6.546a1.5 1.5 0 0 1-2.994.137l-.006-.144.014-6.546-6.7-.015a1.5 1.5 0 0 1-.138-2.993l.144-.007 6.701.015.016-6.5a1.5 1.5 0 0 1 1.503-1.496Z"/></symbol><symbol id="icon-plus" viewBox="0 0 48 48"><path d="M39.71 22.508a1.5 1.5 0 0 1-.154 2.992H25.5v14.056a1.5 1.5 0 0 1-2.992.154l-.008-.154V25.5H8.444l-.154-.008a1.5 1.5 0 0 1 .154-2.992H22.5V8.444a1.5 1.5 0 0 1 2.992-.154l.008.154V22.5h14.056Z"/></symbol><symbol id="icon-refresh" viewBox="0 0 48 48"><path d="M24 5C15.26 5 7.79 11.74 6.032 20.989c-.172.905.37 1.788 1.21 1.973.841.186 1.662-.398 1.834-1.303C10.542 13.95 16.754 8.344 24 8.344c7.247 0 13.46 5.607 14.924 13.318.375 1.975 3.076 1.68 3.076-.335v-8.655C42 11.75 41.304 11 40.446 11c-.858 0-1.554.749-1.554 1.672v.676C35.536 8.256 30.075 5 24 5Zm0 38c8.74 0 16.21-6.741 17.968-15.991.172-.906-.37-1.79-1.21-1.975-.841-.185-1.662.399-1.835 1.304C37.457 34.049 31.246 39.654 24 39.654c-7.245 0-13.456-5.603-14.924-13.313C8.7 24.366 6 24.66 6 26.676v8.651C6 36.251 6.696 37 7.554 37c.858 0 1.554-.749 1.554-1.673v-.675C12.464 39.744 17.925 43 24 43Z"/></symbol><symbol id="icon-search" viewBox="0 0 48 48"><path d="M22.5 4.5c9.941 0 18 8.059 18 18 0 4.685-1.79 8.952-4.723 12.155l6.284 6.284a1.5 1.5 0 0 1-2.008 2.225l-.114-.103-6.367-6.368A17.923 17.923 0 0 1 22.5 40.5c-9.941 0-18-8.059-18-18s8.059-18 18-18Zm0 3c-8.284 0-15 6.716-15 15 0 8.284 6.716 15 15 15 8.284 0 15-6.716 15-15 0-8.284-6.716-15-15-15Z"/></symbol><symbol id="icon-servicer" viewBox="0 0 48 48"><g><path d="M38.926 24.594c.297-.724 0-1.593-.744-1.883-.743-.29-1.635 0-1.933.724-.743 1.304-3.718 2.028-7.882 2.028-.892 0-1.487.58-1.487 1.449 0 .869.595 1.448 1.487 1.448h.446c3.867 0 8.626-.724 10.113-3.766Z"/><path d="m42.463 17.84-1.964-.758C39.895 8.448 32.645 1.48 23.885 1.48 14.973 1.48 7.724 8.6 7.27 17.385l-.906.606c-.302.303-.604.758-.604 1.212v6.362c0 .91.604 1.515 1.51 1.515.907 0 1.51-.606 1.51-1.515v-5.453l.907-.606c.302-.303.604-.757.604-1.363 0-7.574 6.042-13.633 13.594-13.633s13.593 6.059 13.593 13.633c0 .606.454 1.212 1.058 1.363l1.963.757v5.15c0 .91.604 1.516 1.51 1.516.907 0 1.511-.606 1.511-1.515v-6.362c0-.455-.453-1.06-1.057-1.212Z"/><path d="M24.134 27.288c-4.672 0-8.59-3.74-8.59-8.528 0-4.638 3.768-8.528 8.59-8.528 4.671 0 8.59 3.74 8.59 8.528 0 .598 0 1.197-.151 1.795-.151.748.3 1.646 1.205 1.796.754.15 1.658-.3 1.808-1.197.151-.748.302-1.646.302-2.394 0-6.284-5.124-11.52-11.603-11.52-6.48 0-11.604 5.087-11.604 11.52 0 4.04 2.11 7.48 5.275 9.575-5.275 1.795-9.193 5.984-10.247 11.52-.151.748.3 1.646 1.205 1.795h.301c.754 0 1.357-.448 1.507-1.196 1.206-6.135 6.63-10.174 13.563-10.174.904 0 1.506-.598 1.506-1.496-.15-.898-.753-1.496-1.657-1.496Zm11.452 2.842c-.602-.448-1.657-.448-2.11.3-.451.598-.451 1.645.302 2.094 2.11 1.646 4.671 4.19 5.425 8.08.15.747.753 1.196 1.507 1.196h.301a1.552 1.552 0 0 0 1.206-1.795c-.904-4.788-4.069-7.93-6.63-9.875Z"/></g></symbol><symbol id="icon-share" viewBox="0 0 48 48"><path d="m19.87 15.778-.278.052C11.89 17.322 6.7 22.66 5.098 30.028l-.108.526-.1.545a24.402 24.402 0 0 0-.346 4.085c0 2.748 3.334 3.691 4.635 1.251l.079-.157c1.105-2.35 4.138-4.435 7.261-5.16l.504-.111.468-.092.496-.088.696-.105.475-.061.45-.051.263-.026v3.207l.004.17c.168 3.278 4.035 5.738 6.75 3.736L40.95 26.204l.112-.088c2.04-1.695 1.952-4.728-.16-6.286L26.674 8.41l-.218-.156c-2.745-1.83-6.585.028-6.585 3.325l-.001 4.199Zm4.922-5.028.082.058 14.198 11.399c.593.439.614 1.152.105 1.575l-.092.07L24.796 35.32c-.554.407-1.87-.43-1.923-1.474l-.002-.093v-4.777a1.5 1.5 0 0 0-1.58-1.498l-.6.032-.45.031-.465.038-.482.047-.498.056-.785.105-.516.081-.539.095c-.198.037-.38.073-.562.11l-.537.119-.35.085c-3.025.78-5.922 2.535-7.744 4.797l-.128.163.043-.433c.045-.396.1-.792.167-1.186l.09-.494.098-.475c1.442-6.631 6.236-11.219 13.516-12.09a1.5 1.5 0 0 0 1.322-1.49v-5.49c0-.829 1.113-1.367 1.92-.829Z"/></symbol><symbol id="icon-shopping-bag" viewBox="0 0 48 48"><path d="M24.53 4.5c5.313 0 9.79 3.586 11.14 8.47h4.17a1.5 1.5 0 0 1 1.495 1.383l1.653 21.06A7.5 7.5 0 0 1 35.51 43.5H12.489a7.5 7.5 0 0 1-7.477-8.087l1.653-21.06a1.5 1.5 0 0 1 1.495-1.382h5.228C14.738 8.086 19.215 4.5 24.529 4.5Zm13.923 11.47h-2.366l.001.089v4.765h-3V15.97H15.97v4.854h-3V15.97H9.546L8.003 35.648l-.01.176-.004.176a4.5 4.5 0 0 0 4.5 4.5h23.022a4.5 4.5 0 0 0 4.486-4.852L38.453 15.97ZM24.529 7.5a8.562 8.562 0 0 0-7.984 5.47h15.969a8.562 8.562 0 0 0-7.985-5.47Z"/></symbol><symbol id="icon-sign-out" viewBox="0 0 48 48"><path d="M34.938 4.9a5.5 5.5 0 0 1 5.495 5.279l.005.221v1.863a1.5 1.5 0 0 1-2.994.145l-.007-.145V10.4a2.5 2.5 0 0 0-2.335-2.495l-.164-.005H12a2.5 2.5 0 0 0-2.495 2.336L9.5 10.4v27.063a2.5 2.5 0 0 0 2.336 2.494l.164.005h22.938a2.5 2.5 0 0 0 2.494-2.335l.005-.165v-1.889a1.5 1.5 0 0 1 2.994-.144l.007.144v1.89a5.5 5.5 0 0 1-5.28 5.495l-.22.005H12a5.5 5.5 0 0 1-5.496-5.28l-.004-.22V10.4a5.5 5.5 0 0 1 5.279-5.496L12 4.9h22.938Zm1.877 11.696.109.109 5.07 5.587c.294.26.484.634.504 1.051l.001.032.001.04-.003.088-.005.067a1.48 1.48 0 0 1-.284.75l-.097.119-5.187 5.719a1.5 1.5 0 0 1-2.32-1.897l.097-.119 2.926-3.227H24.5a1.5 1.5 0 0 1-.144-2.993l.144-.006h13.1l-2.899-3.196a1.5 1.5 0 0 1-.005-2.01l.109-.109a1.5 1.5 0 0 1 2.01-.005Z"/></symbol><symbol id="icon-smile" viewBox="0 0 48 48"><path d="M24 2.5c11.874 0 21.5 9.626 21.5 21.5S35.874 45.5 24 45.5 2.5 35.874 2.5 24 12.126 2.5 24 2.5Zm0 3C13.783 5.5 5.5 13.783 5.5 24S13.783 42.5 24 42.5 42.5 34.217 42.5 24 34.217 5.5 24 5.5Zm-6.44 21.14c1.385 2.41 3.803 3.893 6.443 3.893 2.639 0 5.056-1.48 6.44-3.889a1.5 1.5 0 1 1 2.601 1.495c-1.905 3.316-5.298 5.394-9.04 5.394-3.745 0-7.14-2.08-9.045-5.399a1.5 1.5 0 0 1 2.602-1.493ZM17.809 15c.856 0 1.549.693 1.549 1.548v3.097a1.548 1.548 0 1 1-3.097 0v-3.097c0-.855.693-1.548 1.548-1.548Zm12.387 0c.856 0 1.549.693 1.549 1.548v3.097a1.548 1.548 0 1 1-3.097 0v-3.097c0-.855.693-1.548 1.548-1.548Z"/></symbol><symbol id="icon-spinner" viewBox="0 0 48 48"><path d="M24 2.5a1.5 1.5 0 0 1 0 3C13.783 5.5 5.5 13.783 5.5 24S13.783 42.5 24 42.5 42.5 34.217 42.5 24a1.5 1.5 0 0 1 3 0c0 11.874-9.626 21.5-21.5 21.5S2.5 35.874 2.5 24 12.126 2.5 24 2.5Z"/></symbol><symbol id="icon-tel" viewBox="0 0 48 48"><path d="M20.87 16.103a5 5 0 0 0-.826 5.98 16.205 16.205 0 0 0 2.68 3.554 15.922 15.922 0 0 0 3.521 2.653 5 5 0 0 0 5.97-.832l.672-.671 6.305 4.822a1 1 0 0 1 .1 1.501l-2.48 2.479a5 5 0 0 1-5.581 1.027c-3.836-1.721-7.616-4.43-11.336-8.15-3.773-3.773-6.556-7.658-8.37-11.653a5 5 0 0 1 1.017-5.602l2.435-2.435a1 1 0 0 1 1.5.097l5.054 6.569-.66.66Zm20.144 13.123-6.405-4.899a2.855 2.855 0 0 0-3.754.25l-.76.76a2 2 0 0 1-2.389.333 12.922 12.922 0 0 1-2.861-2.154 13.206 13.206 0 0 1-2.184-2.9 2 2 0 0 1 .33-2.392l.756-.756a2.847 2.847 0 0 0 .243-3.749l-5.136-6.675a4 4 0 0 0-5.998-.39L10.42 9.09a8 8 0 0 0-1.628 8.965c1.97 4.338 4.964 8.516 8.98 12.533 3.967 3.966 8.043 6.888 12.23 8.766a8 8 0 0 0 8.931-1.643l2.479-2.479a4 4 0 0 0-.399-6.005Z" fill="currentColor" fill-rule="evenodd"/></symbol><symbol id="icon-thumbs-down" viewBox="0 0 48 48"><path d="M41.063 28.381h-8.605c.584 2.046 1.313 5.26.875 8.622-.291 2.776-1.895 4.822-4.229 5.7-1.75.584-3.5.291-4.52-.732-1.167-1.169-1.75-3.507-2.334-5.845-.438-1.607-.73-3.215-1.313-4.092-1.458-2.484-4.666-3.507-5.25-3.653h-4.229c-.875 0-1.458-.584-1.458-1.461V6.46C10 5.585 10.583 5 11.458 5h24.938C42.083 5 45 22.828 45 23.851c0 2.63-2.042 4.53-3.938 4.53ZM36.228 8H13v17.456h3.463c1.01.293 4.905 1.76 6.78 4.987.722 1.173 1.155 2.933 1.588 4.84.433 1.76.866 3.96 1.587 4.548.144.146.866.293 1.731 0 .722-.147 1.876-.88 2.164-3.08.578-4.695-1.442-9.242-1.442-9.242-.145-.44-.145-1.027.144-1.467.288-.44.721-.733 1.154-.733h10.677c.288 0 1.154-.587 1.154-1.467C41.856 20.762 38.249 8 36.229 8ZM5.5 27c-.9 0-1.5-.55-1.5-1.375V6.375C4 5.55 4.6 5 5.5 5S7 5.55 7 6.375v19.25C7 26.45 6.4 27 5.5 27Z"/></symbol><symbol id="icon-thumbs-up" viewBox="0 0 48 48"><path d="M41.063 19.619h-8.605c.584-2.046 1.313-5.26.875-8.622-.291-2.776-1.895-4.822-4.229-5.7-1.75-.584-3.5-.291-4.52.732-1.167 1.169-1.75 3.507-2.334 5.845-.438 1.607-.73 3.215-1.313 4.092-1.458 2.484-4.666 3.507-5.25 3.653h-4.229c-.875 0-1.458.584-1.458 1.461V41.54c0 .876.583 1.461 1.458 1.461h24.938C42.083 43 45 25.172 45 24.149c0-2.63-2.042-4.53-3.938-4.53ZM36.228 40H13V22.544h3.463c1.01-.293 4.905-1.76 6.78-4.987.722-1.173 1.155-2.933 1.588-4.84.433-1.76.866-3.96 1.587-4.548.144-.146.866-.293 1.731 0 .722.147 1.876.88 2.164 3.08.578 4.695-1.442 9.242-1.442 9.242-.145.44-.145 1.027.144 1.467.288.44.721.733 1.154.733h10.677c.288 0 1.154.587 1.154 1.467C41.856 27.238 38.249 40 36.229 40ZM5.5 21c-.9 0-1.5.55-1.5 1.375v19.25C4 42.45 4.6 43 5.5 43S7 42.45 7 41.625v-19.25C7 21.55 6.4 21 5.5 21Z"/></symbol><symbol id="icon-volume-circle" viewBox="0 0 48 48"><path d="M24 2.5c11.874 0 21.5 9.626 21.5 21.5S35.874 45.5 24 45.5 2.5 35.874 2.5 24 12.126 2.5 24 2.5Zm0 3C13.783 5.5 5.5 13.783 5.5 24S13.783 42.5 24 42.5 42.5 34.217 42.5 24 34.217 5.5 24 5.5Zm4.906 9.479c2.248 2.42 3.53 5.68 3.53 9.15 0 3.47-1.282 6.73-3.53 9.15a1.5 1.5 0 0 1-2.198-2.042c1.733-1.864 2.727-4.396 2.727-7.108 0-2.712-.994-5.243-2.727-7.108a1.5 1.5 0 1 1 2.198-2.042Zm-5.403 2.483c1.64 1.766 2.573 4.142 2.573 6.667 0 2.525-.933 4.902-2.573 6.667a1.5 1.5 0 1 1-2.198-2.041c1.124-1.211 1.771-2.858 1.771-4.626 0-1.768-.647-3.415-1.771-4.625a1.5 1.5 0 0 1 2.198-2.042Zm-5.404 2.483a6.135 6.135 0 0 1 1.618 4.184 6.135 6.135 0 0 1-1.618 4.184 1.5 1.5 0 0 1-2.297-1.925l.1-.117a3.136 3.136 0 0 0 .815-2.142 3.16 3.16 0 0 0-.68-1.985l-.136-.157a1.5 1.5 0 1 1 2.198-2.042Z"/></symbol><symbol id="icon-warning-circle-fill" viewBox="0 0 48 48"><path d="M23.871 2.371c11.874 0 21.5 9.626 21.5 21.5s-9.626 21.5-21.5 21.5-21.5-9.626-21.5-21.5 9.626-21.5 21.5-21.5Zm.254 26.929a2.325 2.325 0 1 0 0 4.65 2.325 2.325 0 0 0 0-4.65Zm-.004-17.5a1.5 1.5 0 0 0-1.496 1.504l.031 11.613.007.144a1.5 1.5 0 0 0 2.993-.152l-.031-11.613-.007-.144A1.5 1.5 0 0 0 24.12 11.8Z"/></symbol><symbol id="icon-warning-circle" viewBox="0 0 48 48"><path d="M23.871 2.371c11.874 0 21.5 9.626 21.5 21.5s-9.626 21.5-21.5 21.5-21.5-9.626-21.5-21.5 9.626-21.5 21.5-21.5Zm0 3c-10.217 0-18.5 8.283-18.5 18.5s8.283 18.5 18.5 18.5 18.5-8.283 18.5-18.5-8.283-18.5-18.5-18.5Zm.254 23.929a2.325 2.325 0 1 1 0 4.65 2.325 2.325 0 0 1 0-4.65Zm-.004-17.5a1.5 1.5 0 0 1 1.497 1.352l.007.144.031 11.613a1.5 1.5 0 0 1-2.993.152l-.007-.144-.031-11.613a1.5 1.5 0 0 1 1.496-1.504Z"/></symbol><symbol id="icon-x-circle-fill" viewBox="0 0 48 48"><path d="M24 2.5c11.874 0 21.5 9.626 21.5 21.5S35.874 45.5 24 45.5 2.5 35.874 2.5 24 12.126 2.5 24 2.5Zm-4.735 14.69a1.5 1.5 0 0 0-2.02 2.213l4.636 4.655-4.594 4.574-.098.107a1.5 1.5 0 0 0 2.214 2.019l4.594-4.573 4.569 4.59.106.098a1.5 1.5 0 0 0 2.02-2.214l-4.57-4.591 4.653-4.63.098-.107a1.5 1.5 0 0 0-2.214-2.02l-4.653 4.63-4.634-4.654Z"/></symbol></svg>';

    if (!doc) return;

    function ready(fn) {
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', fn);
        } else {
            fn();
        }
    }

    function appendSvg() {
        doc.body.insertAdjacentHTML('afterbegin', svgSprite);
    }

    var existing = doc.getElementById(id);
    if (!existing) {
        ready(appendSvg);
    }
})(document);