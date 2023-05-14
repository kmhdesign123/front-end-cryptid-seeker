// components
import CryptidCard from '../../components/CryptidCard/CryptidCard'
// css
import styles from './CryptidList.module.css'

const CryptidList = (props) => {
  return (
    <main className={`${styles.container} ${styles.main}`}>
    {props.cryptids.map(cryptid => (
      <CryptidCard key={cryptid._id} cryptid={cryptid} />
    ))}
  </main>
  )
}

export default CryptidList