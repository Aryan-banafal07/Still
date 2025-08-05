/*
  # Seed Initial Data for Still Fashion Website

  1. Sample Products
    - Add the current products from the website
    - Include proper categories, images, and pricing

  2. Sample Collections
    - Add the drops shown on the website
    - Set appropriate statuses and release dates
*/

-- Insert sample products (matching current website products)
INSERT INTO products (name, description, price, category, images, sizes, colors, stock_quantity, is_featured, is_active) VALUES
(
  'Essential Tee',
  'A timeless essential crafted from premium organic cotton. Designed for comfort and versatility, this tee embodies our philosophy of quiet confidence.',
  1499.00,
  'Basics',
  ARRAY['/images/products/1stback-min.jpeg', '/images/products/1stfront-min.jpeg'],
  ARRAY['XS', 'S', 'M', 'L', 'XL'],
  ARRAY['White', 'Black', 'Stone'],
  50,
  true,
  true
),
(
  'Relaxed Tee',
  'Effortlessly relaxed fit with a focus on sustainable materials. Perfect for everyday wear with an elevated touch.',
  1499.00,
  'Basics',
  ARRAY['/images/products/2ndback-min.png', '/images/products/2ndfront-min.png'],
  ARRAY['XS', 'S', 'M', 'L', 'XL'],
  ARRAY['Cream', 'Sage', 'Charcoal'],
  45,
  true,
  true
),
(
  'Oversized Tee',
  'Contemporary oversized silhouette that defines modern minimalism. Crafted for those who appreciate understated luxury.',
  1299.00,
  'Basics',
  ARRAY['/images/products/3rdback-min.png', '/images/products/3rdfront-min.png'],
  ARRAY['S', 'M', 'L', 'XL', 'XXL'],
  ARRAY['Ivory', 'Taupe', 'Midnight'],
  35,
  true,
  true
),
(
  'Minimal Dress',
  'Clean lines meet feminine grace in this versatile dress. Designed to transition seamlessly from day to evening.',
  225.00,
  'Dresses',
  ARRAY['/images/products/4thback.jpeg', '/images/products/4thfront.jpeg'],
  ARRAY['XS', 'S', 'M', 'L', 'XL'],
  ARRAY['Black', 'Stone', 'Olive'],
  25,
  true,
  true
),
(
  'Cashmere Sweater',
  'Luxurious cashmere blend that embodies comfort and sophistication. A wardrobe essential for the conscious consumer.',
  350.00,
  'Knitwear',
  ARRAY['/images/products/cashmere-sweater-1.jpg', '/images/products/cashmere-sweater-2.jpg', '/images/products/cashmere-sweater-3.jpg'],
  ARRAY['XS', 'S', 'M', 'L', 'XL'],
  ARRAY['Camel', 'Cream', 'Charcoal'],
  20,
  false,
  true
),
(
  'Wide Leg Pants',
  'Flowing silhouette that celebrates movement and comfort. Crafted from sustainable fabrics with attention to detail.',
  280.00,
  'Bottoms',
  ARRAY['/images/products/wide-leg-pants-1.jpg', '/images/products/wide-leg-pants-2.jpg', '/images/products/wide-leg-pants-3.jpg'],
  ARRAY['XS', 'S', 'M', 'L', 'XL'],
  ARRAY['Black', 'Navy', 'Stone'],
  30,
  false,
  true
),
(
  'Silk Blouse',
  'Refined elegance in pure silk. A versatile piece that elevates any ensemble with its timeless appeal.',
  320.00,
  'Tops',
  ARRAY['/images/products/silk-blouse-1.jpg', '/images/products/silk-blouse-2.jpg', '/images/products/silk-blouse-3.jpg'],
  ARRAY['XS', 'S', 'M', 'L', 'XL'],
  ARRAY['Ivory', 'Blush', 'Sage'],
  15,
  false,
  true
),
(
  'Wool Coat',
  'Architectural outerwear that defines modern sophistication. Crafted from premium wool with impeccable tailoring.',
  650.00,
  'Outerwear',
  ARRAY['/images/products/wool-coat-1.jpg', '/images/products/wool-coat-2.jpg', '/images/products/wool-coat-3.jpg'],
  ARRAY['XS', 'S', 'M', 'L', 'XL'],
  ARRAY['Camel', 'Black', 'Grey'],
  12,
  false,
  true
);

-- Insert sample collections (matching current website drops)
INSERT INTO collections (name, description, image_url, status, release_date) VALUES
(
  'Spring Essentials',
  'Timeless pieces for the new season. A curated selection of wardrobe fundamentals designed for conscious living.',
  '/images/drops/spring-essentials.jpg',
  'active',
  '2024-03-01T00:00:00Z'
),
(
  'Minimal Luxe',
  'Elevated basics in premium fabrics. Where minimalism meets luxury in perfect harmony.',
  '/images/drops/lux.jpg',
  'draft',
  '2024-04-15T00:00:00Z'
),
(
  'Studio Session',
  'As if it came straight out of an artist''s private world. Creative expression through conscious design.',
  '/images/drops/artist.jpg',
  'active',
  '2024-02-15T00:00:00Z'
);

-- Create a function to handle user profile creation
CREATE OR REPLACE FUNCTION handle_new_user()
RETURNS TRIGGER AS $$
BEGIN
  INSERT INTO profiles (id, email, first_name, last_name)
  VALUES (
    NEW.id,
    NEW.email,
    NEW.raw_user_meta_data->>'first_name',
    NEW.raw_user_meta_data->>'last_name'
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger to automatically create profile on user signup
CREATE OR REPLACE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION handle_new_user();