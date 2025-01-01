import React,{useState, useEffect} from 'react';
import millify from 'millify';
import { Link } from 'react-router-dom';
import { Card,Row, Col, Input } from 'antd';
import { useGetCryptosQuery } from '../services/cryptoApi';

const Cryptocurrencies = ({simplified}) =>{
  const count = simplified ? 10 : 100;
    const {data :cryptoList, isFetching} = useGetCryptosQuery(count);
    const [cryptos, setCrypto] = useState(cryptoList?.data?.coins);
    const [searchTerm, setSearchTerm] = useState('')
    console.log(cryptos)
    useEffect(() =>{
      
      const filteredData= cryptoList?.data?.coins.filter((coin)=> coin.name.toLowerCase().includes(searchTerm.toLowerCase()))
       setCrypto(filteredData);
    },[cryptoList,searchTerm]); 
    if(isFetching) return 'Loading...'
    return(
        <>
         {!simplified && (
            <div className='search-crypto'>
            <Input placeholder='search cryptocurrency' onChange={(e)=> setSearchTerm(e.target.value)}/>

          </div>
         )} 
          
          <Row gutter={[32,32]} className='crypto-card-container'>
            {cryptos?.map((currency) =>(
                <Col xs={24} sm={12} lg={6} className='crypto-card' key={currency.id}>
                  <Link to={`/crypto/${currency.id}`}>
                  <Card 
                       
                        title={`${currency.rank}. ${currency.name}`}
                       extra={<img className='crypto-img' src={currency.iconUrl} style={{width:50,}}/>}
                         hoverable
                    >
                     <p>Price :
                        {millify(currency.price)}
                      </p> 
                     <p>MarketCap :
                       {millify(currency.marketCap)} 
                      </p> 
                     <p>Daily change :
                       {millify(currency.change)}% 
                      </p>   
                    </Card>
                  </Link>
                </Col>
            )
                                               
            )}

          </Row>
        
        </>
    );
}

export default Cryptocurrencies;