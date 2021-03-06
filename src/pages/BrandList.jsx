import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import BrandService from '../services/brandService';
import { Icon, Menu, Table, Placeholder } from 'semantic-ui-react';
import BrandAdd from './BrandAdd';
import '../styles/Tables.css';

export default function BrandList() {
  const [brands, setBrands] = useState([]);
  useEffect(() => {
    let brandService = new BrandService();
    brandService.getAll().then((result) => setBrands(result.data.data));
  }, []);
  return (
    <div>
      <Table inverted celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell className="headerCell">
              Brand Name <BrandAdd></BrandAdd>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {brands.length > 0 ? (
            brands.map((brand) => (
              <Table.Row key={brand.id}>
                <Table.Cell>
                  <NavLink
                    to={`/brandDetail/${brand.id}`}
                    className="navLinkElement"
                  >
                    {brand.name}
                  </NavLink>
                </Table.Cell>
              </Table.Row>
            ))
          ) : (
            <Table.Row key={0}>
              <Table.Cell>
                <Placeholder fluid inverted>
                  <Placeholder.Line />
                  <Placeholder.Line />
                  <Placeholder.Line />
                </Placeholder>
              </Table.Cell>
            </Table.Row>
          )}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu inverted floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
