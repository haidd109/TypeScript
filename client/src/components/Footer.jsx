import { Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter } from "@mui/icons-material";
  import styled from "styled-components";
  import { mobile } from "../responsive";
  
  const Container = styled.div`
    display: flex;
    ${mobile({ flexDirection: "column" })}
  `;
  
  const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 20px;
  `;
  
  const Logo = styled.h1``;
  
  const Desc = styled.p`
    margin: 20px 0px;
  `;
  
  const SocialContainer = styled.div`
    display: flex;
  `;
  
  const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    border-radius: 50%;
    color: white;
    background-color: #${(props) => props.color};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 20px;
  `;
  
  const Center = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ display: "none" })}
  `;
  
  const Title = styled.h3`
    margin-bottom: 30px;
  `;
  
  const List = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-wrap: wrap;
  `;
  
  const ListItem = styled.li`
    width: 50%;
    margin-bottom: 10px;
  `;
  
  const Right = styled.div`
    flex: 1;
    padding: 20px;
    ${mobile({ backgroundColor: "#fff8f8" })}
  `;
  
  const ContactItem = styled.div`
    margin-bottom: 20px;
    display: flex;
    align-items: center;
  `;
  
  const Payment = styled.img`
      width: 50%;
  `;
  
  const Footer = () => {
    return (
      <Container>
        <Left>
          <Logo>DUCHAI.</Logo>
          <Desc>
            DUCHAI. mang lại sự trải nghiệm tuyệt vời nhất dành cho khách hàng..
          </Desc>
          <SocialContainer>
            <SocialIcon color="3B5999">
              <Facebook />
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram />
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter />
            </SocialIcon>
            <SocialIcon color="E60023">
              <Pinterest />
            </SocialIcon>
          </SocialContainer>
        </Left>
        <Center>
          <Title>Liên Kết</Title>
          <List>
            <ListItem>Trang Chủ</ListItem>
            <ListItem>Giỏ Hàng</ListItem>
            <ListItem>Thời Trang Nam</ListItem>
            <ListItem>Thời Trang Nữ</ListItem>
            <ListItem>Phụ Kiện</ListItem>
            <ListItem>Tài Khoản</ListItem>
            <ListItem>Đơn Hàng</ListItem>
            <ListItem>Sản Phẩm Yêu Thích</ListItem>
            <ListItem>Sản Phẩm Yêu Thích</ListItem>
            <ListItem>Điều Khoản</ListItem>
          </List>
        </Center>
        <Right>
          <Title>Liên Hệ</Title>
          <ContactItem>
            <Room style={{marginRight:"10px"}}/> FPT Polytecnic, Trịnh Văn Bô, Nam Từ Liêm, Hà Nội
          </ContactItem>
          <ContactItem>
            <Phone style={{marginRight:"10px"}}/> +01 234 56 78
          </ContactItem>
          <ContactItem>
            <MailOutline style={{marginRight:"10px"}} /> haiddph14809@fpt.edu.vn
          </ContactItem>
          <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
        </Right>
      </Container>
    );
  };
  
  export default Footer;