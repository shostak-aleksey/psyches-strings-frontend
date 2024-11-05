import styled from 'styled-components';
import {
  FaShoppingCart,
  FaSearch,
  FaBars,
  FaHome,
  FaUser,
} from 'react-icons/fa';
import { ResponsiveVisibility } from '@/shared/lib/useMediaQuery/useMediaQuery';
import { AnimatedText } from '@/entities/AnimatedText/AnimatedText';
import { Text } from '@/shared/ui/Text';
import { Colors } from '@/shared/const/colors';
import { getRouteMain, getRouteProfile } from '@/shared/const/router';
import CustomLink from '@/shared/ui/AppLink/CustomLink';
import { classNames } from '@/shared/lib/classNames/classNames';
import { ArrowRotation } from '@/shared/ui/arrowRotation/arrowRotation';
import { HStack } from '@/shared/ui/Stack';
import DropdownMenu from '../DropdownMenu/DropdownMenu';
import { User } from '@/entities/User';

const NavbarContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #ffffff77;
  padding: 10px 20px;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

const IconGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const CartIcon = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const CartCount = styled.span`
  position: absolute;
  top: -5px;
  right: -10px;
  background-color: #ffffff55;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: 0.8rem;
`;

const ResponsiveNavbar = ({
  onToggle,
  isDropdownVisible,
  toggleDropdown,
  handleGoogleLogin,
  isInitLoading,
  user,
}: {
  onToggle: () => void;
  isDropdownVisible: boolean;
  toggleDropdown: () => void;
  handleGoogleLogin: () => void;
  isInitLoading: boolean;
  user?: User;
}) => (
  <NavbarContainer>
    <CustomLink to={getRouteMain()}>
      <Text color={Colors.Black} h3>
        Psyches Strings
      </Text>{' '}
    </CustomLink>
    <IconGroup>
      <HStack justify="around" align="center">
        {user?.id && (
          <CustomLink to={getRouteProfile(user.id)}>
            <FaUser size={20} />
          </CustomLink>
        )}
        <CustomLink to={getRouteMain()}>
          <FaHome size={20} />
        </CustomLink>
        <ArrowRotation onToggle={toggleDropdown} />
        <DropdownMenu
          isDropdownVisible={isDropdownVisible}
          toggleDropdown={toggleDropdown}
          handleGoogleLogin={handleGoogleLogin}
          isInitLoading={isInitLoading}
          user={user}
        />
      </HStack>
    </IconGroup>
  </NavbarContainer>
);

export default ResponsiveNavbar;
