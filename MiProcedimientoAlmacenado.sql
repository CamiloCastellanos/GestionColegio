SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
-- =============================================
-- Author:		Juan Camilo Castellanos Puentes
-- Description:	<Description,,>
-- =============================================
CREATE PROCEDURE MiProcedimientoAlmacenado 
@xml_usuarios XML, 
@xml_compras  XML, 
@xml_itemsIva XML
AS
BEGIN
select	usuario.item.value('Id[1]','VARCHAR(50)') as Id,
		usuario.item.value('Nombre[1]','VARCHAR(50)') as Nombre,
		compra.item.value('Valor[1]','int') as 'Valor Total',
		producto.item.value('Porcentaje[1]','VARCHAR(50)') as Iva

from @xml_usuarios.nodes('Data/Usuario') as usuario(item)
left join @xml_compras.nodes('/Data/Item') as compra(item)
	on usuario.item.value('Id[1]','VARCHAR(50)') = compra.item.value('Usuario[1]','VARCHAR(50)')
left join @xml_itemsIva .nodes('/Data/Producto') as producto(item)
	on compra.item.value('Producto[1]','VARCHAR(50)') = producto.item.value('IdProducto[1]','VARCHAR(50)')

END
GO



	--SET @xml_usuarios = ' 
	--					<Data> 
	--						<Usuario><Id>14</Id><Nombre>Juan</Nombre></Usuario> 
	--						<Usuario><Id>17</Id><Nombre>Maria</Nombre></Usuario> 
	--						<Usuario><Id>25</Id><Nombre>Carlos</Nombre></Usuario> 
	--						<Usuario><Id>15</Id><Nombre>Fernanda</Nombre></Usuario> 
	--					</Data>' 
	--SET @xml_compras = ' 
	--					<Data> 
	--						<Item><Usuario>14</Usuario><Producto>78</Producto><Valor>300</Valor></Item> 
	--						<Item><Usuario>17</Usuario><Producto>23</Producto><Valor>568</Valor></Item> 
	--						<Item><Usuario>17</Usuario><Producto>99</Producto><Valor>350</Valor></Item> 
	--						<Item><Usuario>14</Usuario><Producto>99</Producto><Valor>107</Valor></Item> 
	--						<Item><Usuario>25</Usuario><Producto>23</Producto><Valor>425</Valor></Item> 
	--					</Data>' 
	--SET @xml_itemsIva = ' 
	--					<Data> 
	--					<Producto><IdProducto>23</IdProducto><Porcentaje>0.16</Porcentaje></Producto> 
	--					<Producto><IdProducto>99</IdProducto><Porcentaje>0.19</Porcentaje></Producto> 
	--					</Data>'