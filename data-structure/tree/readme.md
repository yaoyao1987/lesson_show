[source](https://mp.weixin.qq.com/s?__biz=MjM5MTA1MjAxMQ==&mid=2651229534&idx=1&sn=d7ae1e90989604685365c3a4028a55f4&chksm=bd4954da8a3eddcc7678e8b2633cbe5bbcd1cb72f84d07d622aac7aac2d29a0a56ab5e498853&mpshare=1&scene=23&srcid=0814DsYp0uBSBOzEZ1Z3tfrN#rd)

[source](https://juejin.im/post/5a182ad4f265da43310d82c2)

[source](https://www.cnblogs.com/Cathamerst/p/7231182.html)


- 前端中树的存在 Map Set HTML的DOM节点
- 由根出发， 有多个结点，每个结点有值
- 二叉树 
  Maps Sets 数据库 优先队列 在LDAP中查找相应信息  使用文档对象接口进行搜索

Map Set 基础数据结构都是Tree.
数据库中快速搜索也用到了树
HTML的DOM节点通过树表示对应的层次结构
二叉树 二叉搜索树

每个节点有零个或多个子节点， 每个节点都有一个值。 节点之间的连接称为边。
树是图的一种， 但并不是所有图都是树。

没有任何结点的节点叫叶节点。

树的度是最深的叶节点与根节点之间的距离。
边的数量
深度Depth 或者层次level是节点与根节点的距离。

最多只有两个子节点时， 被称为二叉树
完满二叉树
  Full binary tree  除去叶节点， 每个节点都有两个子节点。

完全二叉树
  除了最深一层之外， 其余所有层的节点都必有两个子节点。
 
完美二叉树
  树的叶子节点均在最后一层

完美的二叉树正好有2的K次方减1个节点，k是树的最深一层

二叉搜索树是二叉树的特定应用。 
左子节点的值小于父节点的值， 右子节点的值则必须大于父节点的值。 

- 二叉搜索树 也叫二叉查找树，也称为有序二叉树（Ordered Binary Tree）,排序二叉树（Sorted Binary Tree）
1. 左子树小于它的根节点的值
2. 右子树比根节点大。
3. 任意节点的左右子树也分别为二叉查找树
4. 没有键值相等的节点

遍历树
  遍历树的每一个节点， 并对它们进行某种操作的过程。 
1. 中序遍历
  以最小到最大的顺序访问所有的节点

2. 先序遍历
  祖先节点优于后代节点的顺序遍历

3. 后序遍历
  先访问节点的后代节点， 再访问节点本身

- 删除子节点
  1 需要删除的节点下并没有其他子节点
  2 要删除的节点下有一个子节点
  3 需要删除的节点下有两个子节点
    在右子树中查找最小值， 将值赋给要删除的节点




