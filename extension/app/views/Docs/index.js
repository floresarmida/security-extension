import React, { Component, PropTypes } from 'react'

//  UI
import '../../styles/Docs.css'

import { Card, CardTitle, CardText } from 'material-ui/Card'

/*
DOCS VIEW:
Allows users to change app settings, editors, etc.
*/
class Docs extends Component {
  static propTypes = {}
  static defaultProps = {}
  render () {
    return (
      <section id='docs'>
        <Card style={{ marginBottom: 16 }}>
          <CardTitle title='Documentation' />
          <CardText>
            Lorem ipsum dolor sit amet, et pri epicurei rationibus incorrupte, et qui modus adipiscing comprehensam, exerci eloquentiam signiferumque an cum. Oratio liberavisse at nam, an omnium reprimique nec. Id blandit mnesarchum cotidieque duo, adipiscing adversarium repudiandae ut sit, enim partiendo rationibus id has. Id labitur equidem laoreet vim.

            No quando suavitate pri, eu his paulo constituam philosophia. Cum in etiam numquam, volumus consectetuer id cum. Mea ea quaestio consequuntur, sanctus denique cum ex. Ne vis nonumy aeterno ceteros. Ex hinc assum legendos eum, sea ut vocent instructior.

            Dolores placerat et usu, ad pri probo ferri. Qui dicta adversarium ea. Possit debitis adolescens ne vel. Quas posidonium sed ei.

            No civibus inciderint sed. At zril altera eruditi vis. Qui ea brute dolorem, ei solet nemore vix. Ex per putent erroribus forensibus, offendit persequeris id sed. Dolore expetendis per cu, maiorum argumentum ut pri. Et mei ceteros propriae, usu cibo torquatos definitiones eu.

            Quando efficiendi ne his, cibo eleifend mei an. Pri eu brute recusabo, ne malis ubique nostro per, eos viderer pertinax voluptatibus eu. Ne mei iudico urbanitas quaerendum. Id duo saepe equidem efficiantur, at accusamus patrioque per. His et dico cibo munere.
          </CardText>
        </Card>
      </section>
    )
  }
}
export default Docs
