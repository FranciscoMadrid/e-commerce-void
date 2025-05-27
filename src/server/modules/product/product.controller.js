import * as Product from './product.model.js';
import * as ProductCategory from './product_category.model.js';
import * as ProductAttribute from './product_attribute.model.js';
import * as ProductImage from './product_image.model.js';
import * as ProductVariantAttribute from './product_variant_attribute.model.js';
import * as ProductVariant from './product_variant.model.js';

// Product------------------------------------------

export const getProductsCnt = async (req, res) => {
    try {
        const product = await Product.getAllProducts();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getProductCnt = async (req, res) => {
    try {
        const result = await Product.getProductById(req.params.id);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createProductCnt = async(req, res) => {
    try {
        const result = await Product.createProduct(req.body);
        res.status(201).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateProductCnt = async(req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        const affectedRows = await Product.updateProduct(id, updateFields);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Product not found or nothing changed' });
        }

        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteProductCnt = async(req, res) => {
    try {
        const affectedRows = await Product.deleteProduct(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Brand not found' });
        }
        res.json({ message: 'Product deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Product Category------------------------------------------

export const getProductCategoriesCnt = async(req, res) => {
    try {
        const products = await ProductCategory.getAllCategories();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getProductCategoryCnt = async(req, res) => {
    try {
        const product = await ProductCategory.getCategoryById(req.params.id);
        if(!product)
        {
            res.status(404).json({ message: 'Product Category not found.' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createProductCategoryCnt = async(req, res) => {
    try {
        const product = await ProductCategory.createCategory(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateProductCategoryCnt = async(req, res) => {
    const id = req.params.id;
    const updateData = req.body;

    try {
        const affectedRows = await ProductCategory.updateCategory(id, updateData);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Product Category not found or nothing changed' });
        }

        res.status(201).json({message: 'Product Category has been updated'});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteProductCategoryCnt = async(req, res) => {
    try {
        const affectedRows = await ProductCategory.deleteCategory(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Product Category not found or nothing changed' });
        }

        res.status(201).json({message: "Product Category has been deleted"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Product Attribute------------------------------------------

export const getProductAttributesCnt = async(req, res) => {
    try {
        const products = await ProductAttribute.getAllProductAttributes();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getProductAttributeCnt = async(req, res) => {
    try {
        const product = await ProductAttribute.getProductAttribute(req.params.id);
        if(!product)
        {
            res.status(404).json({ message: 'Product Attribute not found.' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createProductAttributeCnt = async(req, res) => {
    try {
        const product = await ProductAttribute.createProductAttribute(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateProductAttributeCnt = async(req, res) => {
    const id = req.params.id;
    const updateData = req.body;

    try {
        const affectedRows = await ProductAttribute.updateProductAttribute(id, updateData);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Product Attribute not found or nothing changed' });
        }

        res.status(201).json({message: 'Product Attribute has been updated'});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteProductAttributeCnt = async(req, res) => {
    try {
        const affectedRows = await ProductAttribute.deleteProductAttribute(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Product Attribute not found or nothing changed' });
        }

        res.status(201).json({message: "Product Attribute has been deleted"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Product Image------------------------------------------

export const getProductImagesCnt = async(req, res) => {
    try {
        const products = await ProductImage.getAllProductImages();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getProductImageCnt = async(req, res) => {
    try {
        const product = await ProductImage.getProductImage(req.params.id);
        if(!product)
        {
            res.status(404).json({ message: 'Product Attribute not found.' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createProductImageCnt = async(req, res) => {
    try {
        const product = await ProductImage.createProductImage(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateProductImageCnt = async(req, res) => {
    const id = req.params.id;
    const updateData = req.body;

    try {
        const affectedRows = await ProductImage.updateProductImage(id, updateData);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Product Attribute not found or nothing changed' });
        }

        res.status(201).json({message: 'Product Attribute has been updated'});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteProductImageCnt = async(req, res) => {
    try {
        const affectedRows = await ProductImage.deleteProductImage(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Product Attribute not found or nothing changed' });
        }

        res.status(201).json({message: "Product Attribute has been deleted"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Product Variant Attribute------------------------------------------

export const getProductVAsCnt = async(req, res) => {
    try {
        const products = await ProductVariantAttribute.getAllProductVAs();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getProductVACnt = async(req, res) => {
    try {
        const product = await ProductVariantAttribute.getProductVA(req.params.id);
        if(!product)
        {
            res.status(404).json({ message: 'Product Attribute not found.' });
        }

        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createProductVACnt = async(req, res) => {
    try {
        const product = await ProduProductVariantAttributectImage.createCategory(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateProductVACnt = async(req, res) => {
    const id = req.params.id;
    const updateData = req.body;

    try {
        const affectedRows = await ProductVariantAttribute.updateProductVA(id, updateData);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Product Attribute not found or nothing changed' });
        }

        res.status(201).json({message: 'Product Attribute has been updated'});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteProductVACnt = async(req, res) => {
    try {
        const affectedRows = await ProductVariantAttribute.deleteProductVA(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: 'Product Attribute not found or nothing changed' });
        }

        res.status(201).json({message: "Product Attribute has been deleted"});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// Product Variant------------------------------------------
export const getAllVariantsCnt = async (req, res) => {
    try {
        const product = await ProductVariant.getAllVariants();
        res.json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getOneVariantCnt = async (req, res) => {
    try {
        const result = await ProductVariant.getOneVariant(req.params.id);
        res.status(200).json(result);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const createVariantCnt = async(req, res) => {
    try {
        const result = await ProductVariant.createVariant(req.body);
        res.status(201).json(`${item} has been created.`);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateVariantCnt = async(req, res) => {
    try {
        const id = req.params.id;
        const updateFields = req.body;

        const affectedRows = await ProductVariant.updateVariant(id, updateFields);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: `${item} not found or nothing changed` });
        }

        res.json({ message: `${item} has been successfully updated.` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const deleteVariantCnt = async(req, res) => {
    try {
        const affectedRows = await ProductVariant.deleteVariant(req.params.id);

        if(affectedRows === 0)
        {
            return res.status(404).json({ message: `${item} not found` });
        }
        res.json({ message: `${item} has been deleted` });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}