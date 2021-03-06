import { createComponent, $c } from '../../utils'

export interface NavProps {
  vertical?: boolean
  tabs?: boolean
  fill?: boolean
}

export const Nav = createComponent<'nav', NavProps>(
  'Nav',
  'nav',
  ({ vertical, tabs, fill }) =>
    $c(
      'nav',
      vertical && 'flex-column',
      tabs && 'nav-tabs',
      fill && 'nav-fill',
    ),
)

// export class Tabs extends React.Component<types.CommonProps> {
//   render() {
//     const { items } = this.props
//     return (
//       <>
//         <ul className="nav nav-pills mb-3" role="tablist">
//           {items.map(item => (
//             <li className="nav-item">
//               <a
//                 className="nav-link active"
//                 data-toggle="pill"
//                 href="#pills-home"
//                 role="tab"
//                 aria-controls="pills-home"
//                 aria-selected="true"
//               >
//                 Home
//               </a>
//             </li>
//           ))}
//         </ul>
//       </>
//     )
//   }
// }
